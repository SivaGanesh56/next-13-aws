/** @type {import('next').NextConfig} */
const nextConfig = {
}

module.exports = nextConfig

/**
 
  next

  1. vercel
  2. s3 + cloudfront
  3. amplify


  github -> codepipeline -> codebuild -> build time -> pages -> custom script -> s3 -> cloudfront => code changes, pushed to code

  sanity -> data change -> lambda -> codepipeline => CMS data changes



  1. SSG -> static site generation
  2. SSR -> server side rendering

  oursite.com -> amplify -> sanity -> page generate -> SSR

  oursite.com -> cloudfront -> s3 -> static files 


 */