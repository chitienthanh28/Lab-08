class hinhChuNhat {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  tinhChuVi() {
    return 2 * (this.width + this.height);
  }

  tinhDienTich() {
    return this.width * this.height;
  }
}

const ketQua = new hinhChuNhat(5, 10);

const chuVi = ketQua.tinhChuVi();
const dienTich = ketQua.tinhDienTich();


console.log(`Chu vi: ${chuVi}`);
console.log(`Diện tích: ${dienTich}`);
