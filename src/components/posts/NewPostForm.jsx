import { useFormik } from 'formik';
import { useState } from 'react';
import { useAuthCtx } from '../../store/AuthProvider';

function NewPostForm({ onNewPost }) {
  const { user } = useAuthCtx();

  const formik = useFormik({
    initialValues: {
      title: 'Post 1',
      author: 'James Bond',
      date: '',
      content: 'This is body of post1',
      image: 'https://picsum.photos/id/1/400/300',
      tagInput: '',
    },
    onSubmit: (values) => {
      const newPost = {
        title: values.title,
        author: values.author,
        date: Number(new Date(values.date)),
        content: values.content,
        image: values.image,
        tags: values.tagInput.split(',').map((t) => t.trim()),
        userUid: user.uid,
      };
      console.log('newPost ===', newPost);
      onNewPost(newPost);
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
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
export default NewPostForm;
