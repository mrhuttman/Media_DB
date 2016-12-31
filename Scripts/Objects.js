function Music_CD(itemNo, artist, title, imageUrl_sm, imageUrl_lg,
    isMixed, binder, numDiscs, misc)
{
    this.itemNo_pk = itemNo;    // Note: These fields must exactly match (case-sensitive) the schema of the WCF objects
    this.Artist = artist;
    this.Title = title;
    this.imageUrl_sm = imageUrl_sm;
    this.imageUrl_lg = imageUrl_lg;
    this.isMixed = isMixed;
    this.binder = binder;
    this.numDiscs = numDiscs;
    this.misc = misc;
}

function Empty_Music_CD() {
    return new Music_CD(0, "", "", "", "", false, 0, 0, "");
}

function SearchCDs_Binder_Input(binderNo, page) {
    this.BinderNo = binderNo;
    this.Page = page;
}

function SearchCDs_Artist_Input(artist, page) {
    this.Artist = artist;
    this.Page = page;
}

function SearchCDs_Title_Input(title, page) {
    this.Title = title;
    this.Page = page;
}

function SearchCDs_Advanced_Input(page, filter_isMixed, searchCD)
{
    this.Page = page;
    this.Filter_isMixed = filter_isMixed;
    this.SearchCD = searchCD;
}

function Empty_SearchCDs_Advanced_Input() {
    return new SearchCDs_Advanced_Input(-1, false, new Empty_Music_CD());
}
