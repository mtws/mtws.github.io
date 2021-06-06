import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts, getPageBySlug } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../types/post'

type Props = {
  homePage: Post,
  allPosts: Post[]
}

const Index = ({ homePage, allPosts }: Props) => {
  // const heroPost = allPosts[0]
  // const morePosts = allPosts.slice(1)
  const title = homePage?.title || 'Home'

  return (
    <>
      <Layout>
        <Head>
          <title>{title} | Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro title={homePage?.title} />
          {homePage && (
            <HeroPost
              title={homePage.title}
              coverImage={homePage.coverImage}
              date={homePage.date}
              author={homePage.author}
              slug={homePage.slug}
              excerpt={homePage.excerpt}
            />
          )}
          {allPosts.length > 0 && <MoreStories posts={allPosts} />}
        </Container>
      </Layout>
    </>
  )
}

export default Index

export const getStaticProps = async () => {
  const homePage = getPageBySlug(
    'home',
    [
      'title',
      'date',
      'slug',
      'author',
      'coverImage',
      'excerpt',
    ]
  )

  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { homePage, allPosts },
  }
}
