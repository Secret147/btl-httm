
export function getListBoundingBox(labels) {
    const lines = labels.trim().split('\n');

    // Danh sách để lưu trữ đối tượng kết quả
    const objectsList = [];

    // Lặp qua từng dòng và chuyển đổi thành đối tượng JavaScript
    for (let line of lines) {
        const values = line.trim().split(' '); // Chia thành các giá trị
        const label = Number(values[0]);
        const top_left_x = Number(values[1]);
        const top_left_y = Number(values[2]);
        const width = Number(values[3]);
        const height = Number(values[4]);

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
    return objectsList
}