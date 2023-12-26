-- ----------------------------
-- Table structure for Products
-- ----------------------------
DROP TABLE IF EXISTS "Products";
CREATE TABLE "Products"(
  "img" varchar(255) NOT NULL,
  "name" varchar(255) NOT NULL,
  "content" varchar(255) UNIQUE NOT NULL,
  "price" int4 NOT NULL,
  "star" int4 NOT NULL,
  "review" int4 NOT NULL
);

-- ----------------------------
-- Records of Products
-- ----------------------------
INSERT INTO "Products" VALUES('https://csfood.vn/wp-content/uploads/2016/05/Duong-Tinh-Luyen-Bien-Hoa-Goi-1kg.jpg', 'Đường', 'Đường tinh luyện Biên Hòa', 50, 5, 9);
INSERT INTO "Products" VALUES('https://csfood.vn/wp-content/uploads/2016/03/Nuoc-Mam-Nam-Ngu-3-Trong-1-Chai-500ml.jpg', 'Nước mắm', 'Nước mắm Nam Ngư', 50, 4, 11);
INSERT INTO "Products" VALUES('https://cdn.tgdd.vn/Products/Images/2563/79249/nuoc-tinh-khiet-dasani-500ml-thumb-600x600.jpg', 'Nước suối', 'Nước tinh khiết Dasani', 50, 5, 20);
INSERT INTO "Products" VALUES('https://cholimexfood.com.vn/wp-content/uploads/2019/12/nuoc-tuong-hao-vi-500-ml-FILEminimizer.jpg', 'Nước tương', 'Nước tương Hương Việt', 50, 4, 30);

--New product
INSERT INTO "Products" VALUES('https://csfood.vn/wp-content/uploads/2016/04/Nuoc-Giai-Khat-Coca-Cola-Lon-330ml.jpg', 'Nước ngọt', 'Nước ngọt Coca Cola', 8, 4, 30);
INSERT INTO "Products" VALUES('https://csfood.vn/wp-content/uploads/2017/03/171612119367981.jpg', 'Kẹo dẻo', 'Kẹo Dẻo Chupa Chups Cool Cola Gói 90g', 19, 4, 30);
INSERT INTO "Products" VALUES('https://csfood.vn/wp-content/uploads/2017/01/K%E1%BA%B9o-D%E1%BA%BBo-Goldbears-Haribo-G%C3%B3i-80g.jpg', 'Keo dẻo', 'Kẹo Dẻo Goldbears Haribo Gói 80g', 24, 4, 30);
INSERT INTO "Products" VALUES('https://csfood.vn/wp-content/uploads/2017/03/B%C3%A1nh-Milano-V%E1%BB%8B-B%E1%BA%A1c-H%C3%A0-S%C3%B4-C%C3%B4-La-Pepperidge-Farm-G%C3%B3i-198g1.jpg', 'Bánh mỳ', 'Bánh Milano Vị Bạc Hà Sô Cô La Pepperidge Farm Gói 198g', 85, 4, 30);
INSERT INTO "Products" VALUES('https://csfood.vn/wp-content/uploads/2020/11/B%E1%BB%99t-M%C3%AC-L%C3%A0m-B%C3%A1nh-M%C3%AC-Beksul-Th%E1%BB%B1c-Ph%E1%BA%A9m-C%E1%BA%A7u-Tre-G%C3%B3i-1kg.png', 'Bột mì', 'Bột Mì Làm Bánh Mì Beksul Thực Phẩm Cầu Tre Gói 1kg', 40, 5, 29);
INSERT INTO "Products" VALUES('https://csfood.vn/wp-content/uploads/2016/08/K%E1%BA%B9o-s%C3%B4-c%C3%B4-la-s%E1%BB%AFa-Meiji-h%E1%BB%99p-50g.jpg', 'Kẹo sô cô la', 'Kẹo sô cô la sữa Meiji hộp 50g', 36, 5, 29);
INSERT INTO "Products" VALUES('https://csfood.vn/wp-content/uploads/2017/12/K%E1%BA%B9o-B%E1%BA%A1c-H%C3%A0-Anytime-Xylitol-G%C3%B3i-60g.jpg', 'Kẹo', 'Kẹo Bạc Hà Anytime Xylitol Gói 60g', 29, 5, 29);
INSERT INTO "Products" VALUES('https://csfood.vn/wp-content/uploads/2016/08/K%E1%BA%B9o-m%E1%BB%81m-h%C6%B0%C6%A1ng-nho-Alpenliebe-g%C3%B3i-735g.jpg', 'Kẹo', 'Kẹo mềm hương nho Alpenliebe gói 735g', 11, 5, 29);
INSERT INTO "Products" VALUES('https://csfood.vn/wp-content/uploads/2017/12/k%E1%BA%B9o-b%E1%BA%A1c-h%C3%A0-fres-Barley-Mayora-h%E1%BB%99p-600g.png', 'Kẹo', 'Kẹo bạc hà fres Barley Mayora hộp 600g', 70, 5, 29);
INSERT INTO "Products" VALUES('https://csfood.vn/wp-content/uploads/2016/08/K%E1%BA%B9o-b%E1%BA%A1c-h%C3%A0-Migita-Bibica-g%C3%B3i-70g.jpg', 'Kẹo', 'Kẹo bạc hà Migita Bibica gói 70g', 6, 3, 15);
INSERT INTO "Products" VALUES('https://csfood.vn/wp-content/uploads/2021/03/K%E1%BA%B9o-B%C3%B2-S%E1%BB%AFa-Lush-URC-G%C3%B3i-140g.png', 'Kẹo', 'Kẹo Bò Sữa Lush URC Gói 140g', 16, 4, 46);
INSERT INTO "Products" VALUES('https://csfood.vn/wp-content/uploads/2019/10/K%E1%BA%B9o-C%C3%A0-Ph%C3%AA-Espr%C3%A9zzo-Nh%C3%A2n-Mocha-h%E1%BB%99p-450g.png', 'Kẹo', 'Kẹo Cà Phê Esprézzo Nhân Mocha hộp 450g', 60, 3, 14);
INSERT INTO "Products" VALUES('https://csfood.vn/wp-content/uploads/2016/08/K%E1%BA%B9o-c%C3%A0-ph%C3%AA-Coffeeshot-Kopiko-g%C3%B3i-150g.jpg', 'Kẹo', 'Kẹo Cà Phê Coffeeshot Kopiko Gói 150g', 15, 4, 46);
INSERT INTO "Products" VALUES('https://csfood.vn/wp-content/uploads/2016/08/K%E1%BA%B9o-Chew-Cam-H%E1%BA%A3i-H%C3%A0-G%C3%B3i-105g-x-Th%C3%B9ng-60-G%C3%B3i.png', 'Kẹo', 'Kẹo Chew Cam Hải Hà Gói 105g x Thùng 60 Gói', 15, 4, 46);
INSERT INTO "Products" VALUES('https://csfood.vn/wp-content/uploads/2020/08/K%E1%BA%B9o-Chanh-Mu%E1%BB%91i-Eikodo-G%C3%B3i-120g.png', 'Kẹo', 'Kẹo Chanh Muối Eikodo Gói 120g', 16, 4, 46);
INSERT INTO "Products" VALUES('https://csfood.vn/wp-content/uploads/2020/04/M%E1%BB%A9t-D%E1%BB%A9a-Every-Home-L%E1%BB%8D-240g.png', 'Mứt', 'Mứt Dứa Every Home Lọ 240g', 35, 4, 32);
INSERT INTO "Products" VALUES('https://csfood.vn/wp-content/uploads/2019/09/M%E1%BB%A9t-Anh-%C4%90%C3%A0o-Bonne-Maman-h%E1%BB%99p-370g.png', 'Mứt', 'Mứt Anh Đào Bonne Maman Hộp 370g', 145, 4, 24);
INSERT INTO "Products" VALUES('https://csfood.vn/wp-content/uploads/2020/08/M%E1%BB%A9t-B%C3%AD-Vi%E1%BB%87t-San-H%E1%BB%99p-150g.png', 'Mứt', 'Mứt Bí Việt San Hộp 150g', 26, 4, 26);
INSERT INTO "Products" VALUES('https://csfood.vn/wp-content/uploads/2016/06/M%E1%BB%A9t-b%C6%B0%E1%BB%9Fi-v%C3%A0-qu%C3%BDt-Le-Fruit-l%E1%BB%8D-225g.jpg', 'Mứt', 'Mứt Bưởi Và Quýt Le Fruit Lọ 225g', 48, 4, 26);
INSERT INTO "Products" VALUES('https://csfood.vn/wp-content/uploads/2018/01/M%E1%BB%A9t-cam-every-home-l%E1%BB%8D-135g.jpg', 'Mứt', 'Mứt Cam Every Home Lọ 135g', 28, 4, 7);

-- ----------------------------
-- Table structure for Products
-- ----------------------------
DROP TABLE IF EXISTS "accountDb";
CREATE TABLE "accountDb"(
  "Username" varchar(100) UNIQUE NOT NULL,
  "Password" varchar(100) NOT NULL,
  "Fullname" varchar(100) NOT NULL,
  "Email" text NOT NULL,
  "Date" text NOT NULL,
  "Sex" text NOT NULL,
  "Role" text
);

DROP TABLE IF EXISTS "Cart";
CREATE TABLE "Cart"(
  "img" varchar(255) NOT NULL,
  "name" varchar(255) NOT NULL,
  "content" varchar(255) UNIQUE NOT NULL,
  "price" int4 NOT NULL,
  "star" int4 NOT NULL,
  "review" int4 NOT NULL
);