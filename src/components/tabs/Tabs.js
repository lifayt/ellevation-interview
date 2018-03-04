/*
  Structure & technique learned from Ryan Florence's 'Total React' Highly recommended for 
  advanced react techniques and instruction --- totalreact.com
*/

import React, { Component } from 'react';
import './tabs.css';

class Tabs extends Component {
  state = {
    tabIndex: 1
  }

  selectTabIndex = (tabIndex) => {
    this.setState({ tabIndex });
  }

  render() {
    const children = React.Children.map(this.props.children, (child) => {
      return React.cloneElement( child, {
        tabIndex: this.state.tabIndex,
        onSelectTab: this.selectTabIndex
      })
    })

    return (
      <div className="container tabs">
        {children}
      </div>
    );
  }
}

class TabList extends Component {
  render() {
    const tabIndex = this.props.tabIndex;
    const children = React.Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child, {
        isActive: tabIndex === index,
        onSelect: () => this.props.onSelectTab(index)
      });
    })
    return <div className="container tab-list">{children}</div>
  }
}

class Tab extends Component {
  render() {
    const isActive = this.props.isActive;
    return (
      <div 
        className={isActive ? 'tab tab--active' : 'tab'}
        onClick={this.props.onSelect}
      >
        <h3 className="tab-label" >
          {this.props.children}
        </h3>
      </div>
    )
  }
}

class TabPanels extends Component {
  render() {
    const tabIndex = this.props.tabIndex;

    return (
      <div className="tab-panels">
        {this.props.children[tabIndex]}
      </div>
    );
  }
}

class TabPanel extends Component {
  render() {
    return (
      <div className="tab-panel">
        {this.props.children}
      </div>
    );
  }
}


export { Tabs, TabList, Tab, TabPanels, TabPanel };