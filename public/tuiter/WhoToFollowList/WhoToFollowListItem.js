const WhoToFollowListItem = (who) => {
    return(`
    <div class="list-group-item">
        <div class="row">
            <div class="col-2">
                <img src=${who.avatarIcon} class="rounded-circle wd-img-size" width="100%">
            </div>
            <div class="col-6">
                <span class="fw-bolder">${who.userName}</span>
                <i class="fas fa-check-circle p-1"></i>
                <div>@${who.handle}</div>
            </div>
            <div class="col-4">
                <button type="button" class="btn btn-primary w-100 mt-1 rounded-pill float-end" >Follow</button>
            </div>
        </div>
    </div>
`);
}
export default  WhoToFollowListItem;
