import React from 'react'
import NewPostSelect from './NewPostSelect.jsx'
import NewPostQuestion from './NewPostQuestion.jsx'
import NewPostArticle from './NewPostArticle.jsx'
import { BrowserRouter } from 'react-router'

function NewPostPage() {
  const [postType, setPostType] = React.useState('');

  return (
      <div>
        <NewPostSelect value={postType} setValue={setPostType} />
        {postType === 'question' && <NewPostQuestion />}
        {postType === 'article' && <NewPostArticle />}
      </div>
  )
}

export default NewPostPage
