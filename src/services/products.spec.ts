import { mapFromProductDto, ProductDto } from "./products";

describe("mapFromProductDto", () => {
  it("should map from ProductDto to Product", () => {
    // Given
    const input: ProductDto = {
      id: "prod_2O5Yst3NQSf8b6xBQCVgi4KJw6p",
      creatorId: "usr_2O5YssnJNfDynPxoCsT5hsulDwM",
      createTime: "2023-04-06T21:01:59.752638+02:00",
    };

    // When
    const result = mapFromProductDto(input);

    // Then
    expect(result).toEqual({
      id: "prod_2O5Yst3NQSf8b6xBQCVgi4KJw6p",
      creatorId: "usr_2O5YssnJNfDynPxoCsT5hsulDwM",
      createTime: new Date("2023-04-06T21:01:59.752638+02:00"),
    });
  });
});
