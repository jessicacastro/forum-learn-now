export class Slug {
  value: string
  
  constructor(value: string) {
    this.value = value
  }

  /**
   * Reveives a text and returns as a normalized slug
   * 
   * Example: "Example title" => "example-title"
   * 
   * @param text 
   */

  static createFromText(text: string): Slug {
    const slugText = text
      .normalize("NFKD")
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/[^\w\-]+/g, "")
      .replace(/\-\-+/g, "-")
      .replace(/_/g, "-")
      .replace(/-$/g, "")
    
    return new Slug(slugText)
  }
}