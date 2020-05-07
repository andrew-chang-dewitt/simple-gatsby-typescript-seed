import React from 'react'

export interface LayoutProps {
  pageTitle: string
}

export class Layout extends React.Component<LayoutProps, {}> {
  render() {
    return (
      <div>
        <div id="header">
          <h1>
            Hello: <span id="pageTitle">{this.props.pageTitle}</span>
          </h1>
        </div>
        <div id="content">{this.props.children}</div>
      </div>
    )
  }
}
