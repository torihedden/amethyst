import React from 'react';

const ButtonSet = ({setPage, incrementPage, decrementPage, currentPage, pageLimit}) => (
    <div>
        <button className="secondary-button" onClick={() => setPage(1)}>First</button>
        <button className="secondary-button" onClick={() => decrementPage(currentPage)}>Previous</button>
        <button className="secondary-button" onClick={() => incrementPage(currentPage, pageLimit)}>Next</button>
        <button className="secondary-button" onClick={() => setPage(pageLimit)}>Last</button>
    </div>
)

export class Pagination extends React.PureComponent {
    state = {
        currentPage: 2,
        pageLimit: 10
    }

    setPage = (page) => {
        this.setState((state, props) => {
            return { currentPage: page}
        })
    }

    incrementPage = (page, pageLimit) => {
        if (page === pageLimit) return;
        this.setState((state, props) => {
            return { currentPage: page + 1}
        })
    }

    decrementPage = (page) => {
        if (page === 1) return;
        this.setState((state, props) => {
            return { currentPage: page - 1}
        })
    }

    render() {
        const { currentPage, pageLimit } = this.state;
        return (
            <div>
                <ButtonSet
                    setPage={this.setPage}
                    incrementPage={this.incrementPage}
                    decrementPage={this.decrementPage}
                    currentPage={this.state.currentPage}
                    pageLimit={this.state.pageLimit}
                />
                <div>{currentPage} of {pageLimit}</div>
            </div>
        )
    }
}


export default Pagination;