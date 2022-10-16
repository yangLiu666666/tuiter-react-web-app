import PostSummaryList from "../PostSummaryList";
import NavigationBar from "../NavigationBar/index.js"
import SearchBar from "../SearchBar/index.js";
import TopicImage from "../TopicList/index.js";

const ExploreComponent = () => {
    return(`
           <div class="row">
           ${SearchBar()}
                       <!-- search field and cog -->
           </div>
           <ul class="nav mb-2 nav-tabs">
           ${NavigationBar()}
                      <!-- tabs -->
           </ul>
           <!-- image with overlaid text -->
           ${TopicImage()}
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
