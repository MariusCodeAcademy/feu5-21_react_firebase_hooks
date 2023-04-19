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

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-2">
        <label className="form-label" htmlFor="title">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="form-control"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
      </div>
      <div className="mb-2">
        <label className="form-label" htmlFor="author">
          Author
        </label>
        <input
          type="text"
          id="author"
          name="author"
          className="form-control"
          onChange={formik.handleChange}
          value={formik.values.author}
        />
      </div>
      <div className="mb-2">
        <label className="form-label" htmlFor="date">
          Date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          className="form-control"
          onChange={formik.handleChange}
          value={formik.values.date}
        />
      </div>
      <div className="mb-2">
        <label className="form-label" htmlFor="content">
          Content
        </label>
        <textarea
          id="content"
          name="content"
          className="form-control"
          onChange={formik.handleChange}
          value={formik.values.content}
        />
      </div>
      <div className="mb-2">
        <label className="form-label" htmlFor="image">
          Image URL
        </label>
        <input
          type="text"
          id="image"
          name="image"
          className="form-control"
          onChange={formik.handleChange}
          value={formik.values.image}
        />
      </div>
      <div className="mb-2">
        <label className="form-label" htmlFor="tags">
          Tags
        </label>
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
