import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'

export const PricingPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return [
		<section class="hero is-medium is-primary is-bold" style={{ backgroundImage: 'url("../img/the-mat-dryers.jpg")', backgroundSize: 'cover'}}>
		<div class="hero-body">
			<div class="container">
				<h1 className="title">Services Available</h1>
				<h2 class="subtitle">
					What you can expect when at The Mat
				</h2>
			</div>
		</div>
	</section>,
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
	]
}

PricingPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const PricingPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <PricingPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  )
}

PricingPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PricingPage

export const pricingPageQuery = graphql`
  query PricingPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
