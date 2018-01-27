# Next Auth Client

This a isometric session library for the [next-auth](https://www.npmjs.com/package/next-auth) module.

NextAuth is library for adding authentication to Next.js projects.

## Example usage

````javascript
import React from 'react'
import { NextAuth } from 'next-auth-client'

export default class extends React.Component {
  static async getInitialProps({req}) {
    return {
      session: await NextAuth.init({req})
    }
  }
  render() {
    if (this.props.session.user) {
      return(
        <div>
          <p>You are logged in as {this.props.session.user.name || this.props.session.user.email}.</p>
        </div>
        )
    } else {
      return(
        <div>
          <p>You are not logged in.</p>
        </div>
      )
    }
  }
}
````

See [next-auth](https://www.npmjs.com/package/next-auth) for more information or [nextjs-starter](https://nextjs-starter.now.sh) for a working demo.