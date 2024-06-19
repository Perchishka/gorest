import api from "../utils/apiUtils"
import {test as base} from "@playwright/test"

type ApiFixture = {
    API: api;
}

const apiFixture = base.extend<ApiFixture>({

    API: async ({request}, use ) => {
        const API = new api(request);
        await use(API);
    }
});