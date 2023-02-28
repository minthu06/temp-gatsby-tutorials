import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

// const getData = graphql`
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

const getDB = graphql`
{
    site {
      info: siteMetadata {
        title
        description
        author
        person {
          name
          age
        }
        complexData {
          name, age
        }

      }
    }
  }
  `
const FetchData = () => {
    // const data = useStaticQuery(getData)
    const data = useStaticQuery(getDB)

    return (
        <div>
            <h1>{data.site.info.title}</h1>
        </div>
    )
}

export default FetchData
