 // Hàm tạo chuỗi ngẫu nhiên
    function randomString() {
      return Math.random().toString(36).substring(2, 15);
    }

    // Hàm tạo mảng duy nhất
    function createUniqueArray(size) {

      // tao doi tuong name va source de khong trung lap
      const uniqueNames = new Set();
      const uniqueSources = new Set();
      const array = [];

      while(array.length < size) {

        //tao ra cac name va source, kiem tra co trung lam hay khong
        const name = `ThoPotter_${randomString()}`;
        const source = `Source_${randomString()}`;

        if (!uniqueNames.has(name) && !uniqueSources.has(source)) {
          uniqueNames.add(name);
          uniqueSources.add(source);

          array.push({
            id: array.length + 1,
            name: name,
            address: `QUANG_NAM_${array.length + 1}`,
            gender: Math.random() > 0.5 ? 'Male' : 'Female',
            phoneNumber: `09${Math.floor(Math.random() * 1000000000)}`,
            description: `trai dat hinh vuong_${array.length + 1}`,
            source: source
          });
        }
      }

      return array;
    }

    // Hàm hiển thị mảng lên bảng
    function displayArray(array) {
      const table = document.getElementById('arrayTable');
      array.forEach(item => {
        const row = table.insertRow();
        Object.values(item).forEach(text => {
          const cell = row.insertCell();
          cell.textContent = text;
        });
      });
    }

    // Tạo và hiển thị mảng
    const myArray = createUniqueArray(2000);
    displayArray(myArray);
    console.log(myArray);


   