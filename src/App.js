import './App.css';
import Header from './Header'
import Navbar from './Navbar'
import BlogList from './BlogList'
import BlogPost from './BlogPost'
import Footer from './Footer'
import posts from './posts'

function App() {

  const blogListPosts = posts.map(data => {
    return (
      <BlogList 
        key={data.id}
        title={data.title}
        subTitle={data.subTitle}
        author={data.author}
        date={data.date}
      />
    )
  })

  console.log(posts)
  
  return (
    <div className="App">
      <Header />
        <Navbar />
      {blogListPosts}
        <BlogPost />
      <Footer />
    </div>
  );
}

export default App;
