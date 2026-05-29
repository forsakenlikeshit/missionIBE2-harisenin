.env

```
DB_NAME=educourse
DB_USER=root
DB_PASSWORD=Pumpedupkick1!
DB_HOST=localhost
DB_PORT=3306
SERVER_PORT=3000
```

create dummy data

```
npm run seed
```

# ENDPOINTS

## GET ALL COURSES

```
GET /course
```

---

## GET COURSE BY ID

```
GET /course/:id
```

Example:

```
/course/1
```

---

## CREATE COURSE

```
POST /course
```

Body (JSON):

```
{
  "title": "React JS Basic",
  "description": "Learn React from zero to hero",
  "price": 150000,
  "id_tutor": 1,
  "id_kategori": 2,
  "thumbnail": "/uploads/react.jpg"
}
```

Response:

```
{
  "success": true,
  "message": "Course created",
  "data": {
    "id_kelas": 1,
    "title": "React JS Basic",
    "description": "Learn React from zero to hero",
    "price": 150000,
    "id_tutor": 1,
    "id_kategori": 2,
    "thumbnail": "/uploads/react.jpg"
  }
}
```

---

## UPDATE COURSE

```
PATCH /course/:id
```

Body (JSON):

```
{
  "title": "React JS Advanced",
  "description": "Updated course content",
  "price": 200000,
  "id_kategori": 3
}
```

Response:

```
{
  "success": true,
  "message": "Course updated"
}
```

---

## DELETE COURSE

```
DELETE /course/:id
```

Response:

```
{
  "success": true,
  "message": "Course deleted"
}
```
