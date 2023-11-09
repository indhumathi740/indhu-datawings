const express = require("express");
const cors = require("cors");
const db = require("./db");
const mailer = require("./mailer");
const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(cors());
app.use(express.json());


// test
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let uploadPath = '../infy/uploads/'; // Default path for images
    if (file.mimetype === 'application/pdf' || file.mimetype === 'application/msword' || file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      uploadPath = '../infy/candidate/'; // Change path for PDFs
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    let uid = uuidv4();
    cb(null, uid + file.originalname);
  },
});

const upload = multer({ storage });

/*const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../infy/uploads/");
  },
  filename: (req, file, cb) => {
    let uid = uuidv4();
    cb(null, uid + file.originalname);
  },
});

const upload = multer({ storage }); */

// careerform file 
/*const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../infy/candidate/");
  },
  filename: (req, file, cb) => {
    let uid = uuidv4();
    cb(null, uid + file.originalname);
  },
});

const upload = multer({ storage });*/

app.get("/api", (req, res) => {
  res.send("<h1>Hello From Node !!</h1>");
});

// ! User Login
app.post("/api/login", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  const userSql = "SELECT * FROM `users` WHERE username = ? AND password = ?";
  const userData = [username, password];
  db.query(userSql, userData, (err, data) => {
    if (err) {
      return res
        .status(500)
        .json({ err: "Internal Server Error Please Try Again Later" });
    } else {
      if (data.length > 0) {
        return res.status(200).json({ res: "Success" });
      } else {
        return res.status(401).json({ err: "Invalid Username or Password" });
      }
    }
  });
});

// ! Category Add
app.post("/api/cat", (req, res) => {
  let catName = req.body.name;
  let status = req.body.status;
  
  const catSql = "INSERT INTO `category` (name, status) VALUES (?,?)";
  const catData = [catName, status];
  db.query(catSql, catData, (err, data) => {
    if (err) {
      return res
        .status(500)
        .json({ err: "Internal Server Error Please Try Again Later" });
    } else {
      return res.status(201).json({ res: "Category added successfully" });
    }
  });
});

// ! Get Category Data
app.get("/api/catdata", (req, res) => {
  let catDataSql = "SELECT * FROM `category` WHERE isdeleted = 0";
  db.query(catDataSql, "Active", (err, data) => {
    if (err) {
      return res
        .status(500)
        .json({ err: "Internal Server Error Please Try Again Later" });
    } else {
      return res.status(201).json(data);
    }
  });
});

// !Get Single Cat data
app.get("/api/editcat/:id", (req, res) => {
  const categoryId = req.params.id;
  let catDataSql = "SELECT * FROM `category` WHERE id = ?";
  db.query(catDataSql, categoryId, (err, data) => {
    if (err) {
      return res
        .status(500)
        .json({ err: "Internal Server Error Please Try Again Later" });
    } else {
      return res.status(201).json({ res: "Success", result: data });
    }
  });
});

// !Cat Update
app.post("/api/catupdate", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const status = req.body.status;
  let catDataUpdate = "UPDATE `category` SET name=?, status=? WHERE id=?";
  let catEdata = [name, status, id];

  db.query(catDataUpdate, catEdata, (err, data) => {
    if (err) {
      return res
        .status(500)
        .json({ err: "Internal Server Error. Please Try Again Later." });
    } else {
      return res.status(201).json({ res: "Category Updated 😊😊" });
    }
  });
});

//! Get Blog Data
app.get("/api/blogdata", (req, res) => {
  let blogDataSql = "SELECT * FROM `blogs` WHERE isdeleted = 0";
  db.query(blogDataSql, (err, data) => {
    if (err) {
      return res
        .status(500)
        .json({ err: "Internal Server Error Please Try Again Later" });
    } else {
      return res.status(201).json(data);
    }
  });
});

//! Get Single Blog Data
app.get("/api/editblog/:id", (req, res) => {
  const blogId = req.params.id;
  let blogDataSql = "SELECT * FROM `blogs` WHERE id = ?";
  db.query(blogDataSql, blogId, (err, data) => {
    if (err) {
      return res
        .status(500)
        .json({ err: "Internal Server Error Please Try Again Later" });
    } else {
      return res.status(201).json({ res: "Success ⭐⭐", result: data });
    }
  });
});

// ! Add Blog
app.post("/api/addblog", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ err: "No file uploaded." });
  }

  const title = req.body.title;
  const category = req.body.category;
  const quote = req.body.quote;
  const metades = req.body.metades;
  const metakey = req.body.metakey;
  const content = req.body.content;
  const img = req.file.filename;
  const status = req.body.status;
  const intro = req.body.intro
  const date = new Date();
  
   console.log(img)

  const blogSql = `
    INSERT INTO blogs (title, date, category, content, quote, img, metades, metakey, status, intro)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const blogData = [
    title,
    date,
    category,
    content,
    quote,
    img,
    metades,
    metakey,
    status,
    intro
  ];

  db.query(blogSql, blogData, (err, data) => {
    if (err) {
      return res
        .status(500)
        .json({ err: "Internal Server Error Please Try Again Later " });
    } else {
      return res.status(201).json({ res: "Blog added successfully 朗" });
    }
  });
});


// Career
// ! Career Add
app.post("/api/addcar", (req, res) => {
    let carName = req.body.title;
    let status = req.body.status;
    let carQual = req.body.qualification;
    let carExp = req.body.experience;
    let carJd = req.body.jd;
    let carIntro = req.body.intro;
    let carOpenings = req.body.openings;
    
    const carSql = "INSERT INTO `career` (title, status , degree, exp, noofopening, content, intro) VALUES (?,?,?,?,?,?,?)";
    console.log(0)
    const carData = [carName, status,carQual,carExp,carOpenings,carJd, carIntro];
    db.query(carSql, carData, (err, data) => {
      if (err) {
        return res
          .status(500)
          .json({ err: "Internal Server Error Please Try Again Later",err });
          console.log(err)
      } else {
        return res.status(201).json({ res: "Career added successfully" });
      }
    });
});

// ! Get Career Data
app.get("/api/career-data", (req, res) => {
    let carDataSql = "SELECT * FROM `career` WHERE isdeleted = 0";
    db.query(carDataSql, "Active", (err, data) => {
      if (err) {
        return res
          .status(500)
          .json({ err: "Internal Server Error Please Try Again Later" });
      } else {
        return res.status(201).json(data);
      }
    });
});
// !Get Single Career data
app.get("/api/edit-career/:id", (req, res) => {
    const careerId = req.params.id;
    let carDataSql = "SELECT * FROM `career` WHERE id = ?";
    db.query(carDataSql, careerId, (err, data) => {
      if (err) {
        return res
          .status(500)
          .json({ err: "Internal Server Error Please Try Again Later" });
      } else {
        return res.status(201).json({ res: "Success", result: data });
      }
    });
});
// !Career Update
app.post("/api/carupdate", (req, res) => {
    const id = req.body.id;
    const carName = req.body.title;
    const status = req.body.status;
    const carQual = req.body.qualification;
    const carExp = req.body.experience;
    const carJd = req.body.jd;
    const carIntro = req.body.intro;
    const carOpenings = req.body.openings;

    let carDataUpdate = "UPDATE `career` SET title=?, status=?,degree =?,exp=?,noofopening =?,content=?,intro=? WHERE id=?";
    let carEdata = [carName, status,carQual,carExp,carOpenings,carJd,carIntro ,id];
  
    db.query(carDataUpdate, carEdata, (err, data) => {
      if (err) {
        return res
          .status(500)
          .json({ err: "Internal Server Error. Please Try Again Later.",err });
      } else {
        return res.status(201).json({ res: "Category Updated " });
      }
    });
});
//Career Delete
app.delete("/api/cardelete/:id", (req, res) => {
    const delID = req.params.id;
    const carDelSql = "UPDATE `career` SET isdeleted = ? WHERE id = ?";
    const carDelData = [1, delID];
    db.query(carDelSql, carDelData, (err, data) => {
      if (err) {
        return res.status(500).json({ err: "Deletion Failed" });
      } else {
        return res.status(200).json({ res: "Blog deleted successfully." });
      }
    });
});

// ! Career Formdata
app.post("/api/carformdata", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ err: "No file uploaded."});
  }
  console.log(1);
  const name = req.body.name;
  const email = req.body.email;
  const phno = req.body.phno;
  const position = req.body.position;
  const exp = req.body.exp;
  const selfintro = req.body.selfintro;
  const file = req.file.filename;

  console.log(file)
  
  const formSql = `
    INSERT INTO candidates (name, email,phno, position, exp, selfintro,file)
    VALUES (?, ?, ?, ?, ?, ?,?)
  `;
  const formData = [
    name,
    email,
    phno,
    position,
    exp,
    selfintro,
    file
  ];

  db.query(formSql, formData, (err, data) => {
    if (err) {
      return res
        .status(500)
        .json({ err: "Internal Server Error Please Try Again Later ",err });
    
    } else {
      return res.status(201).json({ res: "CareerForm added successfully 朗" });
    }
  });
});

// get candidate data
app.get("/api/candata", (req, res) => {
  let canDataSql = "SELECT * FROM `candidates` WHERE isdeleted = 0";
  db.query(canDataSql, "Active", (err, data) => {
    if (err) {
      return res
        .status(500)
        .json({ err: "Internal Server Error Please Try Again Later" });
    } else {
      return res.status(201).json(data);
    }
  });
});


// !Blog UpDate
app.post("/api/updateblog", upload.single("file"), (req, res) => {
  const id = req.body.id;
  const title = req.body.title;
  const category = req.body.category;
  const quote = req.body.quote;
  const metades = req.body.metades;
  const metakey = req.body.metakey;
  const content = req.body.content;
  const img = req.file ? req.file.filename : null;
  const status = req.body.status;
  const intro = req.body.intro

  let updateBlogSql = "";
  let updateBlogData = [];

  if (img) {
    updateBlogSql = `
      UPDATE blogs
      SET title=?, category=?, quote=?, metades=?, metakey=?, content=?, img=?, status=?,intro=?
      WHERE id=?
    `;

    updateBlogData = [
      title,
      category,
      quote,
      metades,
      metakey,
      content,
      img,
      status,
      intro,
      id,
    ];
  } else {
    updateBlogSql = `
      UPDATE blogs
      SET title=?, category=?, quote=?, metades=?, metakey=?, content=?, status=?,intro=?
      WHERE id=?
    `;

    updateBlogData = [
      title,
      category,
      quote,
      metades,
      metakey,
      content,
      status,
      intro,
      id,
    ];
  }

  db.query(updateBlogSql, updateBlogData, (err, data) => {
    if (err) {
      return res
        .status(500)
        .json({ err: "Internal Server Error. Please Try Again Later." });
    } else {
      return res.status(200).json({ res: "Blog updated successfully." });
    }
  });
});

// ! Blog Delete
app.delete("/api/blogdelete/:id", (req, res) => {
  const delID = req.params.id;
  const blogDelSql = "UPDATE `blogs` SET isdeleted = ? WHERE id = ?";
  const blogDelData = [1, delID];
  db.query(blogDelSql, blogDelData, (err, data) => {
    if (err) {
      return res.status(500).json({ err: "Deletion Failed" });
    } else {
      return res.status(200).json({ res: "Blog deleted successfully." });
    }
  });
});

// ! Category Delete
app.delete("/api/catdelete/:id", (req, res) => {
  const delID = req.params.id;
  const blogDelSql = "UPDATE `category` SET isdeleted = ? WHERE id = ?";
  const blogDelData = [1, delID];
  db.query(blogDelSql, blogDelData, (err, data) => {
    if (err) {
      return res.status(500).json({ err: "Deletion Failed" });
    } else {
      return res.status(200).json({ res: "Blog deleted successfully." });
    }
  });
});

app.get("/api/dash", (req, res) => {
  const blogSql =
    "SELECT COUNT(*) AS totalBlogs FROM `blogs` WHERE isdeleted = 0";
  const blogActSql =
    "SELECT COUNT(*) AS activeBlogs FROM `blogs` WHERE status = 'Active' AND isdeleted = 0";
  const catSql =
    "SELECT COUNT(*) AS totalCategories FROM `category` WHERE isdeleted = 0";
  const catActSql =
    "SELECT COUNT(*) AS activeCategories FROM `category` WHERE status = 'Active' AND isdeleted = 0";

  db.query(blogSql, (err, results) => {
    if (err) {
      console.error("Error executing blogSql:", err);
      res.status(500).send("Error fetching data.");
      return;
    }
    const totalBlogs = results[0].totalBlogs;

    db.query(blogActSql, (err, results) => {
      if (err) {
        console.error("Error executing blogActSql:", err);
        res.status(500).send("Error fetching data.");
        return;
      }
      const activeBlogs = results[0].activeBlogs;

      db.query(catSql, (err, results) => {
        if (err) {
          console.error("Error executing catSql:", err);
          res.status(500).send("Error fetching data.");
          return;
        }
        const totalCategories = results[0].totalCategories;

        db.query(catActSql, (err, results) => {
          if (err) {
            console.error("Error executing catActSql:", err);
            res.status(500).send("Error fetching data.");
            return;
          }
          const activeCategories = results[0].activeCategories;

          res.json({
            totalBlogs,
            activeBlogs,
            totalCategories,
            activeCategories,
          });
        });
      });
    });
  });
});

// Contact Mail
app.post("/api/contact", (req, res) => {
  // User Data
  let name = req.body.name;
  let phone = req.body.phone;
  let email = req.body.email;
  let category = req.body.category;
  let subject = req.body.subject;
  let message = req.body.message;

  const msgData = {
    from: "contact@infygain.com",
    to: "support.website@infygain.com",
    subject: `Contact Alert - ${subject}`,
    html: `<h3>Name : ${name}</h3>
            <h3>Phone : ${phone}</h3>
            <h3>Email : ${email}</h3>
            <h3>Requirement : ${category}</h3>
            <p>Message : ${message}</p>`,
  };
  mailer.sendMail(msgData, (err, data) => {
    if (err) {
        console.log(err);
        res.json({err:"Something Went Wrong"})
    }else {
        res.json({info:"Thankyou For Contacting 😊"})
    }
  });
});


app.listen(5000, () => {
  console.log("Running 😎");
});
