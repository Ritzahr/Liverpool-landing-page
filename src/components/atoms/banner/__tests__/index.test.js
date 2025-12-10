import { screen, render } from "@testing-library/react";
import { Banner } from '..';

describe('Banner', () => {
  let title;

  it('should render on the screen, with correct text and color', () => {
    title = 'Banner Test';

    render(<Banner title={title} color={'red'} />);

    const header = screen.getByRole("header");
    const words = title.split(' ');
    
    expect(header).not.toEqual(null);
    words.forEach((word, i) => {
      const headerWord = header.children[i].innerHTML;
      const wordTag = header.children[i];
      
      expect(headerWord).toEqual(word);
      expect(wordTag).toHaveStyle("color : rgb(255, 0, 0);");;
    });
  });
});
