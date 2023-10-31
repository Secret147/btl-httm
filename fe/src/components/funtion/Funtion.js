
export function getListBoundingBox(labels) {
    const lines = labels.trim().split('\n');

    // Danh sách để lưu trữ đối tượng kết quả
    const objectsList = [];

    // Lặp qua từng dòng và chuyển đổi thành đối tượng JavaScript
    for (let line of lines) {
        const values = line.trim().split(' '); // Chia thành các giá trị

        // Kiểm tra xem mỗi dòng có ít nhất 5 giá trị không (label, top_left_x, top_left_y, width, height)
        if (values.length < 5) {
            // Bạn có thể ném ra một lỗi hoặc trả về thông báo lỗi
            return null
            // return "Nội dung file text không đúng định dạng";
        }

        const top_left_x = Number(values[1]);
        const top_left_y = Number(values[2]);
        const width = Number(values[3]);
        const height = Number(values[4]);

        // Kiểm tra xem các giá trị có phải là số hợp lệ không
        if (isNaN(top_left_x) || isNaN(top_left_y) || isNaN(width) || isNaN(height)) {
            return null
            // return "Nội dung file text chứa giá trị không hợp lệ";
        }

        // Tạo đối tượng JavaScript từ các giá trị
        const object = {
            top_left_x,
            top_left_y,
            width,
            height,
        };

        // Thêm đối tượng vào danh sách
        objectsList.push(object);
    }

    console.log(objectsList);
    return objectsList;
}
