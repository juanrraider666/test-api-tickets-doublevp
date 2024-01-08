
class BackOfficeTicketRepositoryMock {
    private mockSearchAll = jest.fn();
    private mockSave = jest.fn();
    private mockMatching = jest.fn();
    private courses = [];

    returnOnSearchAll(courses) {
        this.courses = courses;
    }

    returnMatching(courses) {
        this.courses = courses;
    }

    async searchAll() {
        this.mockSearchAll();
        return this.courses;
    }

    assertSearchAll() {
        expect(this.mockSearchAll).toHaveBeenCalled();
    }

    async save(course) {
        this.mockSave(course);
    }

    assertSaveHasBeenCalledWith(course) {
        expect(this.mockSave).toHaveBeenCalledWith(course);
    }

    async matching(criteria) {
        this.mockMatching(criteria);
        return this.courses;
    }

    assertMatchingHasBeenCalledWith() {
        expect(this.mockMatching).toHaveBeenCalled();
    }
}

module.exports = {BackOfficeTicketRepositoryMock};
