import React from 'react'
import App from 'next/app'
import CustomThemeProvider from '../components/ThemeProvider'
import Layout from '../components/Layout'
import { Provider } from 'react-redux'
import configureStore from '../state/store'

const store = configureStore()

class Aquarium extends App {
	render() {
		const { Component, pageProps } = this.props
		return (
			<Provider store={store}>
				<CustomThemeProvider>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</CustomThemeProvider>
			</Provider>
		)
	}
}

export default Aquarium
