const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();
const port = 5000;

const cors = require("cors");
app.use(cors());

// 업로드된 파일을 public/uploads 폴더에 저장
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/uploads"); // React의 public 폴더 내에 저장
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({ storage });

// 정적 파일 제공
app.use(express.static(path.join(__dirname, "public")));

// 파일 업로드 처리
app.post("/upload", upload.array("images", 30), (req, res) => {
    res.send("Files uploaded successfully");
});

app.listen(port, () => {
    console.log(`✈ Server is running at http://localhost:${port}`);
});
