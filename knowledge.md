<!-- TUTORIAL -->
--https://d33wubrfki0l68.cloudfront.net/73bb62ebc338fcd64ee95bde18684ffe3b3bb379/dac4f/assets/images/one-way-data-flow-04fe46332c1ccb3497ecb04b94e55b97.png--
-- redux là gì:
=> là thư viện js dùng để quản lý và cập nhật state của các ứng dụng
--vì sao we must use redux?
=>help us to manage the global state(state ở nhiều nơi trong các cái component có thể truy suất và update)
=>dễ debug
=>xử lý lưu trữ data from the server

--why do we must use redux-toolkit?
=> sinh ra để solve the problems for redux-core
=> việc config redux phức tạp
=>phải cài đặt thủ công nhiều packages to redux it can build effectively
=> redux requires rất nhiều bolerplate(là các code được repeat many times) code


--when do we use redux efficiently
=> dự án có số lượng lớn state và các state được sử dụng ở nhiều nơi
=> state được cập nhật thường xuyên 
=> logic code cập nhật state phức tạp
=> ứng dụng có số lượng code trung bình or bigger and there are many people working together
=> cần debug và muốn xem cách state được cập nhật tại  bất kỳ khoảng thời gian nào.

--không phải lúc nào we use redux

---V: Kiến trúc của redux và các khái niệm cần nắm
+state management
+immutability(bất biến)
====> chúng ta không nên mutation (thay đổi) giá trị của mảng hay của array vì nó sẽ là
=gây ra bug hay là ui sẽ không được update correctly 
=làm cho việc viết test rất khó
=khó debug an test
=phá đi khuôn mẫu mà redux built

