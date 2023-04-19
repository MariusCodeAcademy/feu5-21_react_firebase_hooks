import { useFormik } from 'formik';
import { useState } from 'react';

function NewPostForm() {
  const [tags, setTags] = useState([]);

  const formik = useFormik({
    initialValues: {
      title: '',
      author: '',
      date: '',
      content: '',
      image: '',
      tagInput: '',
    },
    onSubmit: (values) => {
      const newPost = {
        title: values.title,
        author: values.author,
        date: values.date,
        content: values.content,
        image: values.image,
        tags: tags,
      };

      // Code to submit the new post data to the server here
    },
  });

  const handleAddTag = (e) => {
    e.preventDefault();
    setTags([...tags, formik.values.tagInput]);
    formik.setFieldValue('tagInput', '');
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          className="form-control"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
      </div>
      <div className="form-group">
        <label htmlFor="author">Author</label>
        <input
          type="text"
          id="author"
          name="author"
          className="form-control"
          onChange={formik.handleChange}
          value={formik.values.author}
        />
      </div>
      <div className="form-group">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          className="form-control"
          onChange={formik.handleChange}
          value={formik.values.date}
        />
      </div>
      <div className="form-group">
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          name="content"
          className="form-control"
          onChange={formik.handleChange}
          value={formik.values.content}
        />
      </div>
      <div className="form-group">
        <label htmlFor="image">Image URL</label>
        <input
          type="text"
          id="image"
          name="image"
          className="form-control"
          onChange={formik.handleChange}
          value={formik.values.image}
        />
      </div>
      <div className="form-group">
        <label htmlFor="tags">Tags</label>
        <div className="input-group mb-3">
          <input
            type="text"
            id="tagInput"
            name="tagInput"
            className="form-control"
            placeholder="Add tag"
            onChange={formik.handleChange}
            value={formik.values.tagInput}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={handleAddTag}
            >
              Add
            </button>
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {tags.map((tag) => (
            <span key={tag} className="badge badge-primary mr-1 mb-1">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
export default NewPostForm;
