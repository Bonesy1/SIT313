import React from 'react'
import NewPostSelect from './newpostselect.jsx'
import NewPostQuestion from './newpostquestion.jsx'
import NewPostArticle from './newpostarticle.jsx'

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
