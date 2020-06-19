import React from 'react';
import './App.scss';

import { Switch, Route } from 'react-router-dom'

import Menu from './components/common/Menu'
import Landing from './components/pages/landing/Landing'
import PortfolioLink from './components/pages/landing/Portfolio'
import Code from './components/pages/landing/Code'
import Dla from './components/pages/landing/Dla'
import Contact from './components/pages/landing/Contact'
import Footer from './components/common/Footer'

import ContactForm from './components/pages/contact/ContactForm'

import PortfolioHeader from './components/pages/portfolio/Header'
import Portfolio from './components/pages/portfolio/Portfolio'

import BlogHeader from './components/pages/blog/Header'
import Blog from './components/pages/blog/Blog'

class App extends React.Component {

	constructor() {
		super()

		this.state = {
			blogPosts: [],
			portfolioPosts: []
		}
	}

	parseData(json) {
		var blogPosts = []
		var portfolioPosts = []

		if (!json.items) return

		for (var item of json.items) {
			if (item.labels && item.labels.includes("portfolio")) {
				var content = item.content.split("@")
				var link = content[0]
				var body = content[1].replace(/<[^>]*>?/gm, '')

				portfolioPosts.push({ link: link, title: item.title, content: body, images: item.images })
			} else {
				blogPosts.push({ published: item.published, title: item.title, content: item.content })
			}
		}

		this.setState({ blogPosts, portfolioPosts })
	}

	getData() {
		const uri = "https://www.googleapis.com/blogger/v3/blogs/7069935918727042095/posts"
		const key = "AIzaSyDz270ludr4oqiJDXHwaFHRRi7gm-cQicw"
		const url = uri + "?fetchImages=true&key=" + key

		fetch(url).then(req => req.json()).then(this.parseData.bind(this))
	}

	componentDidMount() {
		this.getData()
	}

	render() {
		return (
			<div className="App">
				<div id="top"></div>
				<Menu />
				<Switch>
					{/* Home route */}
					<Route exact path={["/", "/home"]}>
						<Landing />
						<PortfolioLink />
						<Code />
						<Dla />
						<Contact />
					</Route>
					{/* Contact route */}
					<Route exact path="/contact">
						<ContactForm />
					</Route>
					{/* Portfolio route */}
					<Route exact path="/portfolio">
						<PortfolioHeader />
						<Portfolio data={this.state.portfolioPosts} />
					</Route>
					{/* Blog route */}
					<Route exact path="/blog">
						<BlogHeader />
						<Blog data={this.state.blogPosts} />
					</Route>
				</Switch>
				<Footer />
			</div>
		)
	}
}

export default App;
