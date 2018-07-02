export class Book {


    constructor(
       public id: string,
        public status: string,
   public uuid: string,
    public title: string,
    public slug: string,
    public html: string,
    public feature_image: string,
    public featured: boolean,
    public page: boolean,
    public locale?: any,
    public visibility: string,
    public meta_title?: any,
    public meta_description?: any,
    public created_at: Date,
    public created_by: string,
    public updated_at: Date,
    public updated_by: string,
    public published_at: Date,
    public published_by: string,
    public custom_excerpt?: any,
    public codeinjection_head?: any,
    public codeinjection_foot?: any,
    public og_image?: any,
    public og_title?: any,
    public og_description?: any,
    public twitter_image?: any,
    public twitter_title?: any,
    public twitter_description?: any,
    public custom_template?: any,
    public author: string,
    public primary_author?: any,
    public primary_tag?: any,
    public url: string,
    public comment_id: string
    ){}

}