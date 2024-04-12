type Product = {
	price: number,
	title: string,
	image_url: string,
	url: string,
}

const products: Product[] = [
	{
		image_url: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lu0e9gf5cnj39a',
		url: 'https://shopee.vn/X%E1%BB%8Bt-kh%E1%BB%AD-m%C3%B9i-Axe-h%C6%B0%C6%A1ng-n%C6%B0%E1%BB%9Bc-hoa-135ml-body-mist-to%C3%A0n-th%C3%A2n-i.111138057.16438127801?xptdk=594a0fc9-87df-403b-b90f-a305768e4fb4',
		price: 91,
		title: 'Xịt khử mùi Axe hương nước hoa 135ml body mist toàn thân',
	},
	{
		title: 'Webcam Logitech MX BRIO Ultra HD 4K - Hội họp & truyền trực tuyến, Mic kép giảm ồn, Show Mode, USB-C',
		image_url: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lthpmle08qoa28',
		url: 'https://shopee.vn/Webcam-Logitech-MX-BRIO-Ultra-HD-4K-H%E1%BB%99i-h%E1%BB%8Dp-truy%E1%BB%81n-tr%E1%BB%B1c-tuy%E1%BA%BFn-Mic-k%C3%A9p-gi%E1%BA%A3m-%E1%BB%93n-Show-Mode-USB-C-i.52679373.25721679469',
		price: 4899
	},
	{
		title: 'Chuột Bluetooth Logitech M350s Pebble 2 Silent - Mỏng nhẹ, Nút tùy chỉnh, Easy-Switch, 4000DPI',
		image_url: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llf6nvla513ca2',
		url: 'https://shopee.vn/Chu%E1%BB%99t-Bluetooth-Logitech-M350s-Pebble-2-Silent-M%E1%BB%8Fng-nh%E1%BA%B9-N%C3%BAt-t%C3%B9y-ch%E1%BB%89nh-Easy-Switch-4000DPI-i.52679373.23552330659',
		price: 489
	},
	{
		title: 'Combo Chuột & Bàn phím Signature Slim Logitech MK950 - Gõ và Nhấp yên tĩnh, Đa thiết bị, Bluetooth 5.0',
		image_url: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-ltho4jwyqln111',
		url: 'https://shopee.vn/Combo-Chu%E1%BB%99t-B%C3%A0n-ph%C3%ADm-Signature-Slim-Logitech-MK950-G%C3%B5-v%C3%A0-Nh%E1%BA%A5p-y%C3%AAn-t%C4%A9nh-%C4%90a-thi%E1%BA%BFt-b%E1%BB%8B-Bluetooth-5.0-i.52679373.24521672336',
		price: 2599
	},
	{
		title: 'Combo Bàn phím Logitech K650 & Chuột Logitech M650 - Bluetooth, USB Bolt',
		image_url: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmsaclzgmrq7f8',
		url: 'https://shopee.vn/Combo-B%C3%A0n-ph%C3%ADm-Logitech-K650-Chu%E1%BB%99t-Logitech-M650-Bluetooth-USB-Bolt-i.52679373.11699730610',
		price: 1559
	},
	{
		title: 'Bàn phím cơ không dây bluetooth | USB Logitech POP KEYS - phím emoji có thể tùy chỉnh',
		image_url: 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-livh4fp1sp8yf7',
		url: 'https://shopee.vn/B%C3%A0n-ph%C3%ADm-c%C6%A1-kh%C3%B4ng-d%C3%A2y-bluetooth-USB-Logitech-POP-KEYS-ph%C3%ADm-emoji-c%C3%B3-th%E1%BB%83-t%C3%B9y-ch%E1%BB%89nh-i.52679373.10077501584',
		price: 2099
	},
	{
		title: 'Chuột không dây Bluetooth Logitech MX Master 3s – Yên tĩnh, 8K DPI, Cuộn siêu nhanh, sạc USB-C, Win | Mac',
		image_url: 'https://down-vn.img.susercontent.com/file/sg-11134201-22100-g0vtmbg1llive9',
		url: 'https://shopee.vn/Chu%E1%BB%99t-kh%C3%B4ng-d%C3%A2y-Bluetooth-Logitech-MX-Master-3s-%E2%80%93-Y%C3%AAn-t%C4%A9nh-8K-DPI-Cu%E1%BB%99n-si%C3%AAu-nhanh-s%E1%BA%A1c-USB-C-Win-Mac-i.52679373.21616681122',
		price: 2209
	},
	{
		title: 'Bàn phím không dây Bluetooth Logitech MX Keys Mini - Nhỏ gọn, Phím tắt thông minh, Có bản cho Mac',
		image_url: 'https://down-vn.img.susercontent.com/file/sg-11134201-22100-cy91m5rylliv4c',
		url: 'https://shopee.vn/B%C3%A0n-ph%C3%ADm-kh%C3%B4ng-d%C3%A2y-Bluetooth-Logitech-MX-Keys-Mini-Nh%E1%BB%8F-g%E1%BB%8Dn-Ph%C3%ADm-t%E1%BA%AFt-th%C3%B4ng-minh-C%C3%B3-b%E1%BA%A3n-cho-Mac-i.52679373.10973280607',
		price: 2199
	},
	{
		title: 'Chuột game có dây Logitech G502 Hero - Cảm biến Hero 25k, RGB, 11 nút lập trình',
		image_url: 'https://down-vn.img.susercontent.com/file/f7754d6657f415daf3106b5acd4b26fc',
		url: 'https://shopee.vn/Chu%E1%BB%99t-game-c%C3%B3-d%C3%A2y-Logitech-G502-Hero-C%E1%BA%A3m-bi%E1%BA%BFn-Hero-25k-RGB-11-n%C3%BAt-l%E1%BA%ADp-tr%C3%ACnh-i.52679373.2784241478',
		price: 989
	},
	{
		title: 'Tai nghe game không dây Lightspeed Logitech G535 - Nhẹ, âm thanh nổi PC, PS4, PS5',
		image_url: 'https://down-vn.img.susercontent.com/file/0333558879de5f92791af578c4890fd9',
		url: 'https://shopee.vn/Tai-nghe-game-kh%C3%B4ng-d%C3%A2y-Lightspeed-Logitech-G535-Nh%E1%BA%B9-%C3%A2m-thanh-n%E1%BB%95i-PC-PS4-PS5-i.52679373.17477366121',
		price: 2179
	},
	{
		title: 'Tai nghe gaming không dây Logitech G735 Aurora - Bluetooth & Lightspeed, RGB, PC, Mac',
		image_url: 'https://down-vn.img.susercontent.com/file/sg-11134201-22100-w0qu6nccpbjvf1',
		url: 'https://shopee.vn/Tai-nghe-gaming-kh%C3%B4ng-d%C3%A2y-Logitech-G735-Aurora-Bluetooth-Lightspeed-RGB-PC-Mac-i.52679373.21559065267',
		price: 4099
	},
	{
		title: '[Version 2] Bàn phím gaming Logitech G PRO X TLK Lightspeed - RGB, Switch GX Tactile',
		image_url: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmgdlw88sxr3f9',
		url: 'https://shopee.vn/-Version-2-B%C3%A0n-ph%C3%ADm-gaming-Logitech-G-PRO-X-TLK-Lightspeed-RGB-Switch-GX-Tactile-i.52679373.18193204924',
		price: 4099
	},
	{
		title: 'Bàn phím cơ gaming Logitech G512 GX RGB - 3 loại phím cơ GX Switch, cổng USB 2.0',
		image_url: 'https://down-vn.img.susercontent.com/file/a351ed13a3834e9b443fdbc8e62bd5f2',
		url: 'https://shopee.vn/B%C3%A0n-ph%C3%ADm-c%C6%A1-gaming-Logitech-G512-GX-RGB-3-lo%E1%BA%A1i-ph%C3%ADm-c%C6%A1-GX-Switch-c%E1%BB%95ng-USB-2.0-i.52679373.967456197',
		price: 2059
	},
	{
		title: 'Bàn di chuột Logitech Mouse Pad Studio Series - Đế chống trượt, lướt dễ dàng, chống đổ tràn',
		image_url: 'https://down-vn.img.susercontent.com/file/sg-11134201-22100-5bqt5i0ucrivc4',
		url: 'https://shopee.vn/B%C3%A0n-di-chu%E1%BB%99t-Logitech-Mouse-Pad-Studio-Series-%C4%90%E1%BA%BF-ch%E1%BB%91ng-tr%C6%B0%E1%BB%A3t-l%C6%B0%E1%BB%9Bt-d%E1%BB%85-d%C3%A0ng-ch%E1%BB%91ng-%C4%91%E1%BB%95-tr%C3%A0n-i.52679373.12344066901?sp_atk=b815ae97-6507-4aeb-ad9e-a790102e0448&xptdk=b815ae97-6507-4aeb-ad9e-a790102e0448',
		price: 199
	},
	{
		title: 'Bàn phím không dây Logitech MX Keys S - Low Profile yên tĩnh, Đèn nền, Bluetooth, Sạc USB-C',
		image_url: 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-livh4fp1sp8yf7',
		url: 'https://shopee.vn/B%C3%A0n-ph%C3%ADm-kh%C3%B4ng-d%C3%A2y-Logitech-MX-Keys-S-Low-Profile-y%C3%AAn-t%C4%A9nh-%C4%90%C3%A8n-n%E1%BB%81n-Bluetooth-S%E1%BA%A1c-USB-C-i.52679373.22472352020',
		price: 2439
	},
]

export default products

