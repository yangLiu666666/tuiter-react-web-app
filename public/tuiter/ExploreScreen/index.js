import NavigationSidebar from "../NavigationSidebar /index.js";
import ExploreComponent from "../ExploreScreen/ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/index.js";

function exploreComponent() {
    $('#wd-explore').append(`
<!--       <h2>Explore</h2>-->
    <div class="row mt-2">
       <div class="col-2 col-md-2 col-lg-1 col-xl-2">
        ${NavigationSidebar('explore')}
       </div>
       <div class="col-10 col-lg-7 col-xl-6">
        ${ExploreComponent()}
       </div>
       <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
       <div class="list-group">
           <div class="list-group-item fw-bolder">
                <div class="wd-color-white">Who to follow</div>
           </div>
       ${WhoToFollowList()}
       </div>
       </div>
    </div>
   `);
}

$(exploreComponent);
