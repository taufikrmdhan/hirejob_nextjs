// import React from "react";
// import Head from "next/head";
// import Footer from "../../component/Footer";
// import Link from "next/link";
// import axios from "axios";
// import { protectedRoute } from "../../HOC/protectionRoute";

// export async function getStaticProps(context) {
//   try {
//     const {id} = context.params;
//     console.log(id)
//     // const response = await axios({
//     //     method: 'GET',
//     //     url: `${process.env.NEXT_PUBLIC_API_URL}/recruiter/list/${id}`,
//     // })
//     const resultList = await fetch(
//       `${process.env.NEXT_PUBLIC_API_URL}/recruiter/list/${id}`,
//       {
//         method: "GET",
//       }
//     )
//     const data = await resultList.json();
//     return {
//         props: {
//             data: data.data
//         },
//         revalidate: 1,
//         notFound: false
//     }
//   }
//   catch (err) {
//     return {
//         props: {
//             data: null
//         },
//         revalidate: 1,
//         notFound: true
//     }
//   }
// }

// export async function getStaticPaths(){
//     const response = await axios({
//         method: 'GET',
//         url: `${process.env.NEXT_PUBLIC_API_URL}/recruiter/list`,
//     })
//     const data = response.data.data
//     const paths = data.map((item) => ({
//         params: {
//             id: item.id_recruiter.toString()
//         }
//     }))
//     return {
//         paths,
//         fallback: false
//     }
// }

// const Index = (props) => {
//   return (
//     <>
//       <Head>
//         <title>Profile perusahaan</title>
//         <meta name="keywords" content="profile perusahaan" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <div className="container-fluid">
//         {
//         props.data.map((item) => {
//           return (
//             <div key={item.id_recruiter} className="row text-center p-2 m-5 bg-light shadow-lg rounded">
//               <div className="col-md-12 bgUngu">
//                 <button className="btn  d-flex justify-content-end align-items-end text-white">
//                   &#9998; Ubah Latar
//                 </button>
//               </div>
//               <div className="col-md-12 mb-3 upProfilePerusahaan">
//                 <img
//                   src={`${process.env.NEXT_PUBLIC_API_URL}/${item.image}`}
//                   width={100}
//                   height={100}
//                   alt=""
//                   className="rounded-circle border border-white"
//                 />
//               </div>
//               <div className="col-md-12">
//                 <h3>{item.company_name}</h3>
//               </div>
//               <div className="col-md-12">
//                 <p>{item.business}</p>
//               </div>
//               <div className="col-md-12">
//                 <p className="text-muted">{item.city}</p>
//               </div>
//               <div className="col-md-12 mt-3">
//                 <p className="text-muted mx-5">{item.description}</p>
//               </div>
//               <div className="col-md-12 my-3">
//                 <Link href="/updateperus/update">
//                   <button type="button" className="btn btnGrape">
//                     Edit profile
//                   </button>
//                 </Link>
//               </div>
//               <div className="col-md-12 mt-3 d-flex justify-content-center">
//                 <div className="row">

//                   <div className="col-md-1">
//                     <i className="fa fa-envelope text-muted"></i>
//                   </div>
//                   <div className="col-md-8">
//                     <p className="text-muted">{item.email}</p>

//                   </div>
//                 </div>
//               </div>
//               <div className="col-md-12  d-flex justify-content-center">
//                 <div className="row">

//                   <div className="col-md-1">
//                     <i className="fa fa-github text-muted"></i>
//                   </div>
//                   <div className="col-md-8">
//                     <p className="text-muted">{item.instagram}</p>

//                   </div>
//                 </div>
//               </div>
//               <div className="col-md-12 mb-5 d-flex justify-content-center">
//                 <div className="row">

//                   <div className="col-md-1">
//                     <i className="fa fa-linkedin text-muted"></i>
//                   </div>
//                   <div className="col-md-8">
//                     <p className="text-muted">{item.linkedin}</p>

//                   </div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//       <Footer />
//     </>
//   );
// };
// Index.layout = "L";
// export default protectedRoute(Index);

import React from "react";
import Head from "next/head";
import Footer from "../../component/Footer";
import Link from "next/link";
import axios from "axios";
import { protectedRoute } from "../../HOC/protectionRoute";

const Index = ({ perusahaan }) => {
  return (
    <>
      <Head>
        <title>Profile perusahaan</title>
        <meta name="keywords" content="profile perusahaan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container-fluid">
        <div className="row text-center p-2 m-5 bg-light shadow-lg rounded">
          <div className="col-md-12 bgUngu">
            <button className="btn  d-flex justify-content-end align-items-end text-white">
              &#9998; Ubah Latar
            </button>
          </div>
          <div className="col-md-12 mb-3 upProfilePerusahaan">
            <img
              src={`${process.env.NEXT_PUBLIC_API_URL}/${perusahaan.image}`}
              width={100}
              height={100}
              alt=""
              className="rounded-circle border border-white"
            />
          </div>
          {perusahaan.company_name ? (
          <div className="col-md-12">
            <h3>{perusahaan.company_name}</h3>
          </div>
          ) : null}
          {perusahaan.business ? (
          <div className="col-md-12">
            <p>{perusahaan.business}</p>
          </div>
          ) : null}
          {perusahaan.city ? (
          <div className="col-md-12">
            <p className="text-muted">{perusahaan.city}</p>
          </div>
          ) : null}
          {perusahaan.description ? (
          <div className="col-md-12 mt-3">
            <p className="text-muted mx-5">{perusahaan.description}</p>
          </div>
          ) : null}
          <div className="col-md-12 my-3">
            <Link href="/updateperus/update">
              <button type="button" className="btn btnGrape">
                Edit profile
              </button>
            </Link>
          </div>
          <div className="col-md-12 mt-3 d-flex justify-content-center">
            <div className="row">
              <div className="col-md-1">
                <i className="fa fa-envelope text-muted"></i>
              </div>
              <div className="col-md-8">
                <p className="text-muted">{perusahaan.email}</p>
              </div>
            </div>
          </div>
          <div className="col-md-12  d-flex justify-content-center">
            <div className="row">
              <div className="col-md-1">
                <i className="fa fa-github text-muted"></i>
              </div>
              <div className="col-md-8">
                <p className="text-muted">{perusahaan.instagram}</p>
              </div>
            </div>
          </div>
          <div className="col-md-12 mb-5 d-flex justify-content-center">
            <div className="row">
              <div className="col-md-1">
                <i className="fa fa-linkedin text-muted"></i>
              </div>
              <div className="col-md-8">
                <p className="text-muted">{perusahaan.linkedin}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.query;

  if (!id) {
    return {
      redirect: {
        destination: "/home/homeRec",
        permanent: false,
      },
    };
  }

  const resRecruiter = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/recruiter/list/${id}`,
    { method: "GET" }
  );

  let { data: dataRecruiter } = await resRecruiter.json();

  if (!dataRecruiter) {
    return {
      redirect: {
        destination: "/home/homeRec",
        permanent: false,
      },
    };
  }

  const perusahaan = Object.values(dataRecruiter)[0];

  return {
    props: {
      perusahaan,
    },
  };
}

Index.layout = "L";
export default protectedRoute(Index);
