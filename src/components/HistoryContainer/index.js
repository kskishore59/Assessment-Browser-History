import {Component} from 'react'

import HistoryItem from '../HistoryItem'
import './index.css'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class HistoryContainer extends Component {
  state = {inputValue: '', searchResults: initialHistoryList}

  onDeleteListItem = id => {
    const {searchResults} = this.state
    const updatedResults = searchResults.filter(each => each.id !== id)
    console.log(updatedResults)
    this.setState({searchResults: updatedResults})
  }

  onChangeSearchInput = event => {
    this.setState(
      {
        inputValue: event.target.value,
      },
      this.renderItemsList,
    )
  }

  renderEmptyView = () => (
    <div className="empty-list-view">
      <p className="empty-text">There is no history to show</p>
    </div>
  )

  renderItemsList = () => {
    const {inputValue, searchResults} = this.state
    const newResults = searchResults.filter(eachSuggestion =>
      eachSuggestion.title.toLowerCase().includes(inputValue.toLowerCase()),
    )

    if (newResults.length === 0) {
      this.renderEmptyView()
    }
    return (
      <ul className="items-container">
        {newResults.map(each => (
          <HistoryItem
            key={each.id}
            itemDetails={each}
            onDeleteListItem={this.onDeleteListItem}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {inputValue, searchResults} = this.state
    const newResults = searchResults.filter(eachSuggestion =>
      eachSuggestion.title.toLowerCase().includes(inputValue.toLowerCase()),
    )

    return (
      <div>
        <nav className="nav-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="nav-logo"
          />
          <div className="search-cont">
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
              />
              <input
                value={inputValue}
                type="search"
                placeholder="Search history"
                onChange={this.onChangeSearchInput}
                className="input-cont"
              />
            </div>
          </div>
        </nav>
        {newResults.length === 0
          ? this.renderEmptyView()
          : this.renderItemsList()}
      </div>
    )
  }
}

export default HistoryContainer
