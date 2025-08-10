import React, { useState } from 'react'
import { blog_data, blogCategories } from '../assets/assets'
import {motion} from "motion/react"
import BlogCard from './BlogCard'
import { useAppContext } from '../context/AppContext'

const BlogList = () => {

    const [menu, setMenu] = useState("All")
    const {blogs, input} = useAppContext()

    const filteredBlogs = ()=>{
      if(input === ''){
        return blogs
      }
      return blogs.filter((blog)=> blog.title.toLowerCase().includes(input.toLowerCase()) || blog.category.toLowerCase().includes(input.toLowerCase()))
    }
  

  return (
    <div>
      <div className='flex justify-center gap-4 sm:gap-8 my-10 relative'>
        {blogCategories.map((item)=>(
            <div key={item} className='relative'>
                <button onClick={()=>setMenu(item)}
                 className={`cursor-pointer text-gray-500 ${menu === item && 
                 'text-white px-4 pt-0.5'}`}>
                    {item}
                    {menu === item && (
                        <motion.div layoutId='underline'
                        transition={{type: 'spring', stiffness: 500, damping: 30}} 
                        className='absolute left-0 right-0 top-0 h-7 -z-1
                    bg-primary rounded-full'></motion.div>
                    )}

                </button>
            </div>
        ))}
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3
      xl:grid-cols-4 gap-8 mb-24 mx-8 sm:mx-16 xl:mx-40'>
        {filteredBlogs().filter((blog)=> menu === "All" ? true : blog.category.toLowerCase() === menu.toLowerCase()).map((blog)=> <BlogCard key={blog._id} blog={blog}/>)}
      </div>
    </div>
  )
}

export default BlogList
/* Simple Summary – Blog Category Buttons

- useState("All") keeps track of the currently selected category (like "All", "Technology", etc).
- blogCategories.map(...) shows a button for each category in the list.
- When you click a button, onClick runs setMenu(item), changing the selected category.
- menu === item checks which category is currently selected.
- If it's selected, extra styles are added (white text + padding) and a blue animated background appears.
- motion.div is from Framer Motion – it shows a smooth blue background animation behind the selected category.
- Tailwind CSS is used to style the buttons and the background.

✅ Final result: A nice-looking, animated category filter bar where the selected tab gets highlighted smoothly.
*/

