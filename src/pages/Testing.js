import { graphql, useStaticQuery } from 'gatsby';
import React from 'react'
import Gallery from '../component/Gallery';
import Layout from '../component/Layout';


// //page query
// const Testing = ({data}) => {
//   const author = data.site.info.author
//   return (
//     <div>
//             <h1>{author}</h1>
//     </div>
//   )
// }
// export const data = graphql`
// {
//     site {
//       info: siteMetadata {
//         title
//         description
//         author
//         person {
//           name
//           age
//         }
//         complexData {
//           name, age

//         }
//       }
//     }
//   }
// `

const Testing = () => {
  return (
    <Layout>
      <main className='page'>

      <Gallery/>
      </main>
    </Layout>
  )
}

export default Testing
