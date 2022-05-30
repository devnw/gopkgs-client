import AlphabeticalSort from './AlphabeticalSort'

const ValidFirstSort = (a, b) => {
    if (a.validated && !b.validated) {
        return -1
    }

    if (!a.validated && b.validated) {
        return 1
    }

    return AlphabeticalSort(a, b)
}

export default ValidFirstSort
