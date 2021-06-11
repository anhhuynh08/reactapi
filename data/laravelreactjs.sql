-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th6 11, 2021 lúc 04:37 PM
-- Phiên bản máy phục vụ: 10.4.19-MariaDB
-- Phiên bản PHP: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `laravelreactjs`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `brand`
--

CREATE TABLE `brand` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name_brand` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `desc_brand` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `brand`
--

INSERT INTO `brand` (`id`, `name_brand`, `desc_brand`, `created_at`, `updated_at`) VALUES
(5, 'H&M', 'Không', '2021-06-10 09:55:50', '2021-06-10 10:04:20'),
(6, 'Dior', 'Thời trang', '2021-06-10 09:57:04', '2021-06-10 10:04:31'),
(7, 'Gucci', 'Thời trang', '2021-06-10 09:57:10', '2021-06-10 10:04:39'),
(8, 'Zara', 'Thời trang', '2021-06-10 10:04:58', '2021-06-10 10:04:58'),
(9, 'Uniqlo', 'Thời trang từ Nhật Bản', '2021-06-10 10:05:21', '2021-06-10 12:17:22');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `category`
--

CREATE TABLE `category` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name_cate` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `desc_cate` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `category`
--

INSERT INTO `category` (`id`, `name_cate`, `desc_cate`, `created_at`, `updated_at`) VALUES
(7, 'Gia dụng', 'đồ điện', '2021-06-10 12:15:44', '2021-06-11 02:11:49'),
(8, 'Áo', 'Thời trang', '2021-06-11 02:10:50', '2021-06-11 02:10:50'),
(9, 'Sữa tắm', 'Mỹ phẩm', '2021-06-11 02:11:03', '2021-06-11 02:11:03'),
(10, 'Dầu gội', 'Mỹ phẩm', '2021-06-11 02:11:12', '2021-06-11 02:11:12'),
(11, 'Nước rửa tay', 'Chăm sóc', '2021-06-11 02:11:31', '2021-06-11 02:11:31');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2021_06_08_075519_create_students_table', 1),
(5, '2021_06_09_150519_create_brand_table', 2),
(6, '2021_06_10_102729_create_categoty_table', 3),
(7, '2021_06_10_154058_create_product_table', 4),
(8, '2021_06_10_155650_create_product_table', 5),
(9, '2021_06_10_160945_create_product_table', 6),
(10, '2021_06_10_161849_create_product_table', 7),
(11, '2021_06_10_162241_create_category_table', 8),
(12, '2021_06_10_164528_create_brand_table', 9);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product`
--

CREATE TABLE `product` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `brand_id` bigint(20) UNSIGNED NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `name_product` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price_product` int(20) NOT NULL,
  `img_product` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `desc_product` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `product`
--

INSERT INTO `product` (`id`, `brand_id`, `category_id`, `name_product`, `price_product`, `img_product`, `desc_product`, `created_at`, `updated_at`) VALUES
(11, 5, 10, 'Dầu Gội TRESemmé Gừng & Trà Xanh Detox Tóc Chắc Khỏe 640g Salon Detox Shampoo', 212000, 'C:\\fakepath\\ipad-pro-2021-129-inch-gray-600x600.jpg', 'Chai lớn', '2021-06-11 02:15:31', '2021-06-11 02:15:31'),
(12, 5, 10, 'Xịt Tạo Kiểu Tóc TRESemmé Giữ Độ Phồng 155g Compressed Micro Mist', 124000, 'C:\\fakepath\\xiaomi-mi-11-lite-4g-blue-600x600.jpg', 'làm đẹp', '2021-06-11 02:16:41', '2021-06-11 02:16:41'),
(13, 9, 8, 'NỮ Áo Sơ Mi Vải Linen Blend Cổ Trụ Tay Lửng 3/4', 399000, 'C:\\fakepath\\xiaomi-mi-11-lite-4g-blue-600x600.jpg', 'KHUYẾN MÃI TẠI TẤT CẢ CỬA HÀNG TỪ 11.06 - 17.06.2021', '2021-06-11 07:31:44', '2021-06-11 07:31:44'),
(14, 9, 8, 'ULTRA LIGHT JACKET', 500000, 'C:\\fakepath\\ipad-pro-2021-129-inch-gray-600x600.jpg', '(SEERSUCKER)', '2021-06-11 07:33:09', '2021-06-11 07:33:09'),
(15, 9, 8, 'NAM Áo Thun Nhiều Màu Cổ Tròn Ngắn Tay', 149000, 'C:\\fakepath\\xiaomi-mi-11-lite-4g-blue-600x600.jpg', 'màu xanh', '2021-06-11 07:34:12', '2021-06-11 07:34:12'),
(16, 9, 8, 'SHORT SLEEVE CREW NECK OVERSIZED', 399000, 'C:\\fakepath\\iphone-12-pro-max-vang-new-600x600-1-600x600.jpg', 'T-SHIRT', '2021-06-11 07:34:59', '2021-06-11 07:34:59');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `students`
--

CREATE TABLE `students` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `course` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `students`
--

INSERT INTO `students` (`id`, `name`, `course`, `email`, `phone`, `created_at`, `updated_at`) VALUES
(1, 'Anh Huynh', 'MBA', 'anh@gmail.com', '0964283265', '2021-06-08 01:25:06', '2021-06-10 12:13:16'),
(3, 'Thao', 'MBA', 'thao@gmail.com', '0326516582', '2021-06-08 02:09:24', '2021-06-08 02:09:24'),
(6, 'Tan', 'PH', 'Phu@gmail.com', '4527429834', '2021-06-08 08:46:44', '2021-06-08 08:46:54'),
(7, 'Destin', 'MCN', 'KingNikolaus@gmail.com', '0964000023', '2021-06-08 08:51:34', '2021-06-10 02:53:53'),
(8, 'Anh Huynh', 'BGN', 'anhhu8@gmail.com', '0964283264', '2021-06-08 08:51:45', '2021-06-08 08:51:45'),
(9, 'Thu', 'MBA', 'anhhuynh0898@gmail.com', '0964283264', '2021-06-08 09:35:29', '2021-06-08 18:58:42'),
(10, 'Destin Skiles', 'BGN', 'KingNikolaus@rhyta.com', '4088989999', '2021-06-08 09:39:22', '2021-06-08 09:39:22'),
(11, 'Anh', 'MBA', 'high@gmail.com', '0123456780', '2021-06-08 18:59:28', '2021-06-08 19:45:07'),
(12, 'Anh Huynh', 'sdf', 'anhhuynh0898@gmail.com', '4964283264', '2021-06-10 09:50:06', '2021-06-10 09:50:06'),
(13, 'VietAir Cargo VietAir Cargo', 'MCN', 'anhhuynh0898@gmail.com', '1408898999', '2021-06-10 12:14:18', '2021-06-10 12:14:18');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `brand`
--
ALTER TABLE `brand`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Chỉ mục cho bảng `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Chỉ mục cho bảng `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`),
  ADD KEY `brand_id` (`brand_id`);

--
-- Chỉ mục cho bảng `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `brand`
--
ALTER TABLE `brand`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT cho bảng `category`
--
ALTER TABLE `category`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT cho bảng `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT cho bảng `product`
--
ALTER TABLE `product`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT cho bảng `students`
--
ALTER TABLE `students`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `product_ibfk_2` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
