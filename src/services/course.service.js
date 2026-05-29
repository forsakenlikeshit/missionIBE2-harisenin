const { Course, Tutor, Kategori, Review } = require('../models');

const getAllCourses = async () => {
  return await Course.findAll({
    include: [Tutor, Kategori, Review],
  });
};

const getCourseById = async (id) => {
  return await Course.findByPk(id, {
    include: [Tutor, Kategori, Review],
  });
};

const createCourse = async (data) => {
  return await Course.create(data);
};

const updateCourse = async (id, data) => {
  return await Course.update(data, {
    where: { id_kelas: id },
  });
};

const deleteCourse = async (id) => {
  return await Course.destroy({
    where: { id_kelas: id },
  });
};

module.exports = {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
};
