import Typography from '@/shared/Typography/Typography';
import { Article } from '@/entities/Article/Article';
import { ArticleWrapper } from '@/widgets/ArticleWrapper';

export default function D() {
    // eslint-disable-next-line max-len
    const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id deleniti doloribus facilis dolor! Neque, aperiam maiores eum dolor dicta a obcaecati nemo qui sit ratione. Asperiores rerum ex neque? Molestiae Assumenda praesentium doloribus et velit magni laborum similique autem alias beatae eius voluptatibus animi, suscipit, sapiente repellendus magnam quisquam? Ut tenetur ullam soluta earum quod neque repellat ab animi dolorum Dolores minus veritatis, consectetur exercitationem deleniti, corporis iste repellendus velit porro possimus dicta quas accusantium optio tenetur corrupti officia eum nulla. Deserunt vero repellat tempore asperiores fugiat incidunt dignissimos voluptate Quis non, modi sed inventore dolor possimus ad atque corporis ipsa porro est enim dignissimos fuga labore error sunt voluptatem eos illo vitae? Veniam consequuntur eligendi id, earum ab assumenda Quo consectetur praesentium eos aliquam? Ut sint eius dolorem animi, asperiores nobis voluptates pariatur inventore nostrum nihil quibusdam ratione, excepturi officiis quo tenetur nam sapiente illo velit dolorum id iure Ea laboriosam, accusantium maiores harum velit error odio voluptatibus in excepturi, pariatur, quam nisi dolor. Recusandae vel id similique, maiores ea, neque minus fugiat veniam obcaecati assumenda, repellendus officia quasi Vitae, consequuntur aut. Voluptatem ullam incidunt vitae culpa pariatur beatae minima esse sit neque qui aperiam, officia, maxime facere eius obcaecati quam similique voluptates itaque! Eligendi quam porro minima illo Ipsa odit architecto, error nulla doloribus omnis porro eos dolorem aut, ducimus et molestiae earum cum distinctio cumque. Reiciendis a facilis officia non distinctio sapiente vero, soluta possimus excepturi corrupti Fuga ipsa sunt, quidem ut quos doloremque maxime ducimus sed temporibus quo illo iure dignissimos laboriosam necessitatibus neque commodi officia natus quas odio repudiandae ea, dicta enim? Voluptas, quo alias Sed, quam pariatur est deserunt earum et tempore quia optio commodi dolorum ea architecto officiis distinctio amet natus incidunt eveniet aliquam quasi laudantium recusandae aspernatur laborum! Minima assumenda mollitia doloremque!';
    return (
        <ArticleWrapper>
            <Typography text="`DEV`" />

            <Article text={text} />
        </ArticleWrapper>
    );
}
