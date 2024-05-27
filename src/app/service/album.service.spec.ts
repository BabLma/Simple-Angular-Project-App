import { TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";

import { AlbumService } from "./album.service";

describe("AlbumService", () => {
  let service: AlbumService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.inject(AlbumService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it("products should return expected data", (done) => {
    const expectedProducts = [
      { id: 1 },
      { brand: "brand1" },
      { caregory: "caregory1" },
    ];

    const expectedData = {
      limit: 1,
      products: expectedProducts,
      total: 1,
    };

    service.getPhotoAlbum().subscribe((data) => {
      expect(data).toEqual(expectedData);
      done();
    });

    const testRequest = httpTestingController.expectOne(
      "https://dummyjson.com/products"
    );

    testRequest.flush(expectedData);
  });
});
