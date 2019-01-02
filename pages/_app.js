import App, { Container } from "next/app"
import Page from "../src/components/Page"
import { ApolloProvider } from "react-apollo"
import withApollo from "../src/apollo/withApollo"

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    pageProps.query = ctx.query

    return { pageProps }
  }
  componentDidMount() {
    // console.log("isAuthenticated", isAuthenticated());
  }

  render() {
    const { Component, pageProps, apollo } = this.props
    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Page>
            <Component {...pageProps} />
          </Page>
        </ApolloProvider>
      </Container>
    )
  }
}

export default withApollo(MyApp)
