import {Fragment} from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Link from "next/link";

import type { Metadata } from 'next'
import products from "@/data/products";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Các sản phẩm mà tôi yêu thích - Vinh WEB',
  description: 'Các sản phẩm mà tôi yêu thích - Vinh WEB',
}

export default function Home() {
  return (
    <Fragment>
      <section className={'container my-20 max-w-5xl flex flex-col lg:flex-row items-center gap-10'}>
        <Avatar className={'w-40 h-40'}>
          <AvatarImage src="/images/avatar-500.jpg" />
          <AvatarFallback>VN</AvatarFallback>
        </Avatar>

        <div className={'flex flex-col gap-3'}>
          <h1 className={'font-bold text-3xl'}>Vinh Nguyễn</h1>
          <p>Tôi là Vinh, năm nay xấp xỉ 28 tuổi. Tôi đã trải qua một số công việc khác nhau trong cuộc sống và chốt lại là làm IT, chuyên môn chính là làm website.</p>
          <div className="flex gap-3">
            <Link href={'/'}>
              <Badge variant="secondary">Youtube</Badge>
            </Link>
            <Link href={'/'}>
              <Badge variant="secondary">Github</Badge>
            </Link>
            <Link href={'/'}>
              <Badge variant="secondary">Facebook</Badge>
            </Link>
          </div>
        </div>
      </section>

      <section className={'container my-20 max-w-7xl'}>
        <h2 className={'text-2xl font-medium mb-6'}>Các sản phẩm mà tôi cực kỳ yêu thích</h2>
        <div className={'grid lg:grid-cols-3 gap-10'}>
          {products.map((product, index) => (
            <Fragment key={index}>
              <Link href={product.url} target={'_blank'} className={'flex flex-col gap-3'}>
                <div className={'relative aspect-square w-full'}>
                  <Image src={`/images/products/image_${index}.png`} alt={product.title} fill={true} />
                </div>
                <p className={'line-clamp-2'}>{product.title}</p>
                <p className={'text-3xl font-bold'}>{product.price.toLocaleString('vi-VN')}.000đ</p>
              </Link>
            </Fragment>
          ))}
        </div>
      </section>
    </Fragment>
  );
}
