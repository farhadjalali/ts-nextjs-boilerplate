import { getActiveCreators } from "./creators";
import data from "../__test__/data.json";

const mockFetch = jest.fn();

describe("Creators Module", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    global.fetch = mockFetch;
  });

  it("should get top 3 active creators in order", async () => {
    mockFetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(data),
    });

    // Given
    const top = 3;

    // When
    const result = await getActiveCreators(top);
    const emails = result.map((r) => r.email);

    // Then
    expect(emails).toEqual([
      "NfDynPx@oCsT5hsulDwM.com",
      "hnTwMre@zr0GUSVXxq7x.com",
      "ac6kaPa@F1TwzsLrWe5j.com",
    ]);
  });
});
