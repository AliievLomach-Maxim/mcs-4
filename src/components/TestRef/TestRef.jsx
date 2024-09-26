import { useContext, useEffect, useRef } from 'react'
import { testContext } from '../../testContext'
import Test2 from './Test2'

const TestRef = () => {
	const refInput = useRef()
	const refInput2 = useRef()

	const handleClick = () => {
		// const res = refInput.current.getBoundingClientRect()

		// window.scrollTo({
		// 	top: res.top,
		// 	behavior: 'smooth',
		// })
		refInput.current.focus()
	}

	const handleClick2 = () => {
		refInput2.current.focus()
	}

	useEffect(() => {
		console.log('refInput', refInput)
	}, [])

	return (
		<div>
			<Test2 />
			<button onClick={handleClick}>Click</button>
			<br />
			<br />
			<br />
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, non! Obcaecati saepe
				corrupti, laborum exercitationem pariatur, blanditiis quos maxime consequatur, cum ipsum
				dignissimos fuga autem ullam excepturi explicabo dicta aut. Placeat praesentium in
				dignissimos eius a eaque deserunt dolores nobis doloremque maiores fugiat assumenda ab, quos
				voluptates hic, consequatur recusandae nihil aliquid dolor fuga commodi inventore aperiam
				voluptate. Culpa, nisi? Consequuntur ea autem, facilis suscipit omnis hic officia voluptatem
				iure magni sed aut distinctio doloremque provident repellat voluptates accusantium ipsum
				aliquam, minima quo rerum illo corporis non? Nobis, corporis quae! Minima earum cupiditate
				nostrum. Saepe tenetur alias quas atque ipsam doloribus doloremque. Mollitia temporibus
				tenetur, sint voluptate iste dolores placeat eos nostrum optio quisquam porro, eum provident
				iusto, architecto eligendi! Impedit iure laudantium quam unde vel quidem illum praesentium
				odit aperiam recusandae. Ex molestias similique quidem ullam, placeat mollitia perspiciatis
				iure accusantium obcaecati blanditiis! Eos saepe asperiores sapiente quasi perspiciatis.
				Expedita iusto reprehenderit repudiandae provident fuga, asperiores dolores explicabo velit
				impedit rerum praesentium minus autem, harum corrupti totam! Deserunt perferendis quisquam
				obcaecati nam distinctio consectetur voluptates eaque nulla repellat voluptatem. Nobis
				itaque doloremque hic, unde dolores excepturi deserunt ipsum quo maxime. Laboriosam unde
				perspiciatis quod, inventore consequatur animi iure quis voluptatum velit dolorem, dolorum
				libero tempora vel maiores eligendi adipisci! Labore amet iusto repellat, quibusdam soluta
				consectetur officia possimus, saepe accusantium est obcaecati quod dolore tempore minima
				repudiandae fugit. Praesentium dignissimos impedit eos distinctio eius recusandae quidem
				laborum ea voluptatibus. Itaque suscipit iste ab quis accusantium quisquam, mollitia vel
				molestiae doloribus numquam minus laboriosam corporis ipsam! Provident placeat, ullam
				quidem, expedita, exercitationem cupiditate aspernatur repellendus veritatis accusamus
				perferendis quae molestias. Natus at voluptatum, inventore, architecto quae accusantium
				nihil perferendis minima assumenda molestiae eveniet explicabo repellat enim. Velit
				mollitia, itaque voluptatibus in ullam, modi soluta at eos nam molestiae laboriosam
				consequatur. Nesciunt architecto dolore error impedit odio deleniti molestiae veniam,
				possimus neque aspernatur, recusandae ratione quasi. Magnam hic error, veniam ab qui
				praesentium corporis quae expedita ad, blanditiis pariatur necessitatibus illum? Officia, ad
				saepe? Incidunt error, id corporis ut placeat eos magnam nesciunt, nostrum officiis tempora
				facilis voluptatibus eum neque consequuntur aliquid impedit aut? Aut sit autem modi esse
				reiciendis quibusdam. Dolore, fugit eveniet excepturi aut reprehenderit, sunt quo libero
				dolorum ipsum itaque quae consequatur, tempora veniam illum exercitationem porro error rerum
				doloribus dolor necessitatibus ullam eos? Suscipit unde magni enim. Eius tempora aliquid
				commodi doloremque. Quis temporibus nihil quibusdam accusantium aspernatur earum vel eos
				corrupti illum voluptatum exercitationem illo itaque quod odio, blanditiis quisquam dolorem
				iusto? Quis, non sint. Consequatur. Asperiores corporis recusandae sequi iure temporibus. A,
				quia maiores! Sequi possimus suscipit, laborum commodi nesciunt, blanditiis labore deserunt
				et omnis dolorum, rem voluptatem hic in! Earum facilis soluta ad itaque! Mollitia aspernatur
				incidunt eveniet ducimus praesentium dolor, ullam et tempore eligendi doloribus nulla?
				Delectus odit illum mollitia porro alias temporibus deserunt quos ducimus quae nulla amet
				eaque, odio laudantium! Aperiam. Perferendis, odio blanditiis. Expedita, impedit temporibus
				pariatur fuga eos sint, alias atque ullam, ad repudiandae facere molestiae placeat nam.
				Similique voluptatibus dignissimos a quidem qui? Vitae eum tempore blanditiis eaque. Minus
				ea totam earum esse non magnam perferendis accusantium ipsam harum voluptatibus, dolorem
				placeat maxime delectus sed neque iste dolor reprehenderit nisi nesciunt et sequi quis.
				Facilis modi libero beatae. Fuga repellendus ut illum odio accusamus? Architecto,
				consequuntur. Aspernatur accusantium quia a dignissimos aliquam et velit, distinctio illo
				numquam mollitia repudiandae ab harum eum quidem quis, natus, facere nihil deserunt.
				Sapiente illum nulla ut cupiditate facilis at. Dicta neque unde possimus mollitia sint, enim
				deleniti eum excepturi aperiam laboriosam vero amet facere nisi aspernatur omnis vitae, iste
				odit ab exercitationem. Autem assumenda optio vel ducimus fuga molestiae architecto deleniti
				omnis in, sit dicta dolor inventore ad quasi nostrum. Fuga, distinctio neque. Aut sapiente,
				nobis vero quae quidem sit unde deserunt? Reprehenderit qui distinctio modi provident
				voluptatum ratione necessitatibus impedit, excepturi vitae quo non quae quas perferendis
				esse, incidunt recusandae? Debitis odio natus sunt expedita facere ducimus mollitia illo
				veritatis neque. Nisi enim nam suscipit asperiores ipsa facilis ut labore veritatis nobis at
				minus, odio molestias quae non tempore, dolore voluptas tenetur sint officia a nemo soluta
				accusamus! Esse, ea ratione! Distinctio beatae debitis pariatur assumenda autem dolore
				accusantium corporis porro minus dolorum voluptatum facere maiores, delectus, aliquid neque
				cum sit. Distinctio ipsum magni dolorum eaque illo! Aliquid placeat accusantium mollitia.
				Similique nesciunt odio ipsa corrupti enim, perspiciatis culpa. Nobis adipisci id, atque
				fugiat quas sapiente sequi accusamus eveniet tempore temporibus ab dolore, accusantium ut,
				libero saepe quisquam cupiditate! Voluptates, repellat. Nihil amet aperiam alias quod
				tempora quaerat illo odit error id. Inventore eveniet commodi at nihil ad sint et aliquid
				nemo! Accusantium assumenda doloribus nam in modi sint officiis nisi. Ut velit illum ipsam
				odio atque esse perspiciatis eveniet culpa sunt, quam aut, dolores vel quisquam iusto beatae
				soluta doloribus, aperiam et excepturi ducimus ex repudiandae! Deserunt exercitationem
				laudantium illo? Quam quia nostrum dolorum eos rerum? Neque similique inventore iure
				doloremque vel, quasi voluptatibus! Dolorem error optio vitae tenetur provident aliquam
				voluptatum, amet quasi nesciunt dolores earum ab consequatur quod? Dolore eaque nobis
				delectus quam consectetur laborum fuga soluta quo voluptatum porro. Doloribus esse minus
				ratione, qui fugit deleniti amet alias vero dolore ut soluta beatae ab. Necessitatibus,
				cumque quae! Aliquid quod repudiandae, pariatur magni explicabo repellendus quasi, enim
				minus accusamus, odit provident maxime? Hic ipsa sunt, impedit deserunt dolor cumque,
				officiis quibusdam veritatis, a temporibus dolores quas placeat est! Porro mollitia
				accusamus repellendus eum nam minima alias, impedit itaque, soluta pariatur aliquam expedita
				perspiciatis sed! Facere debitis culpa aperiam a autem eos enim libero corporis similique
				ullam, eius dolore. Expedita eligendi quaerat obcaecati nisi provident velit! Eos, tempore.
				Praesentium necessitatibus recusandae maxime excepturi blanditiis! Aut dolor veritatis
				incidunt. Fuga, sed placeat soluta sapiente neque repellendus quisquam sint itaque vitae.
				Necessitatibus quam consectetur perspiciatis, sed modi eveniet veniam reprehenderit,
				molestias sapiente quisquam, dolores qui voluptatem velit suscipit ipsam laborum deleniti.
				Illo accusantium similique tempore aut hic magni. Repudiandae, voluptates expedita? Iste
				modi eum hic, magnam rerum esse reiciendis quos odio mollitia dolorem, architecto quisquam
				ex corporis exercitationem quam necessitatibus ipsam cumque cum maxime quasi excepturi nulla
				nostrum quis! Praesentium, porro. Deleniti ad optio non recusandae molestias magni rerum
				odit illo earum. Nemo, architecto repudiandae nobis, eos rerum vero voluptas vitae maiores
				quas quis aut culpa incidunt, distinctio ipsum quam omnis! At cum reprehenderit unde aut
				doloremque! Exercitationem officiis autem, dolores modi libero iste asperiores optio
				commodi. Sint ratione ipsum accusamus illum possimus repudiandae? Quos cupiditate tempore,
				repellendus commodi officia placeat? Voluptas et, a incidunt beatae fuga quibusdam ea optio
				molestias reprehenderit velit fugiat amet accusamus, repudiandae harum itaque suscipit!
				Temporibus, dolores. Nesciunt modi accusamus mollitia, perspiciatis ut cumque a quasi? Nisi
				optio ex iure esse exercitationem deserunt eligendi quasi excepturi, earum corrupti dolore,
				vitae velit hic! Incidunt alias dignissimos rem. Ab natus eius, corrupti sed minus qui!
				Excepturi, ratione labore. Nulla illum quo sunt recusandae praesentium itaque cumque soluta.
				Inventore nobis velit minus fuga voluptate, non nulla itaque voluptatem, assumenda, pariatur
				quod vitae ex! Obcaecati ducimus voluptates vel iusto quibusdam. Inventore modi nesciunt
				esse? Aspernatur maxime debitis quo saepe, consectetur voluptates impedit, distinctio
				accusantium id quia excepturi nihil non dicta repellendus architecto maiores voluptatem fuga
				atque neque aliquam, quasi omnis. Nihil totam ducimus velit culpa non, assumenda consectetur
				aspernatur exercitationem similique sint quia, ex iusto ut omnis nesciunt fuga consequatur,
				qui hic atque deleniti adipisci autem vitae vel minus! Consequatur. Recusandae magnam culpa,
				voluptatibus voluptates eligendi totam iure, mollitia accusamus, nostrum dignissimos dicta
				rem perferendis! Dolor, dicta ipsa excepturi voluptatum reprehenderit quas inventore! Sunt
				incidunt consectetur quod repellat distinctio mollitia! Dolore rerum, hic minima commodi
				eveniet unde sequi quos quaerat quis soluta accusamus blanditiis? Possimus deserunt
				exercitationem iste delectus id quidem maiores necessitatibus sit, alias fuga odio
				repellendus repellat. Tenetur! Provident incidunt iste laborum sequi eius amet minima sit,
				iusto repellat harum quia nobis molestias commodi quae non, at modi repudiandae accusamus
				officia enim deleniti quis? Fugit blanditiis tenetur odio. Ipsa maiores modi nulla quibusdam
				minima impedit aperiam exercitationem et, quae mollitia iure a, voluptas molestiae qui!
				Similique illum odio a architecto quod delectus iusto iste, beatae itaque sunt dolores? Eius
				praesentium laudantium laborum inventore dignissimos, deleniti perferendis mollitia
				distinctio? Quaerat id incidunt dignissimos. Voluptatem, beatae hic doloribus fuga aliquid
				veniam quas odio vero consequuntur. Porro aspernatur ipsum assumenda dolores. Ullam tempore
				voluptas ipsa hic distinctio facere, eum quibusdam deserunt. Corrupti, voluptatum! Labore
				debitis ut laboriosam fuga sequi. Temporibus perspiciatis aperiam quas voluptas neque quae
				mollitia, tempore voluptates aliquam sunt! Est laudantium illo molestiae explicabo ipsa
				consectetur iste, debitis voluptate? Dolore ut sint exercitationem nulla quam repellat iusto
				maiores doloremque recusandae laboriosam esse eum non laudantium, ab ad alias possimus.
				Sapiente architecto laborum aliquam cum quod consectetur beatae impedit itaque fugit esse
				repudiandae sit facere, dolore exercitationem quia modi accusantium officiis labore
				cupiditate obcaecati temporibus molestias velit. Ut, quae laborum? A blanditiis placeat
				soluta possimus nesciunt autem sint sed temporibus facere ducimus, officia saepe mollitia
				natus. Quod velit ullam veritatis est harum fugiat maiores, earum, iste aperiam cum porro
				magni. Consectetur voluptates vel adipisci officiis sequi accusantium at perspiciatis
				possimus aut dolore eveniet laudantium, dolor nobis nemo excepturi iure tempora temporibus
				inventore deleniti? Natus, sequi labore doloremque animi debitis quis? Quis odit asperiores
				soluta incidunt autem qui porro laboriosam tempore. Possimus esse consequuntur itaque
				quisquam dolorem, a voluptatibus non facere ipsum ad exercitationem necessitatibus, numquam
				optio illo asperiores? Consequatur, consequuntur. Iusto, earum. Similique natus dolores, eum
				hic ullam provident recusandae illum perspiciatis, enim itaque deserunt assumenda temporibus
				nulla sit amet alias veniam quos tempore! Optio natus doloribus illum obcaecati similique.
				Ipsam et magnam harum nam perspiciatis quaerat ab vel, rerum qui impedit ducimus delectus id
				earum eius doloremque explicabo vitae, dignissimos veniam, labore tenetur exercitationem
				aliquam. Maiores, labore. Dignissimos, voluptatibus! Unde laborum soluta laudantium
				exercitationem error non aliquid adipisci illum suscipit corrupti perspiciatis itaque eos
				beatae cupiditate repellendus magni quos officiis obcaecati veritatis harum distinctio
				voluptatibus, totam asperiores. Cupiditate, magni. Eaque corporis rerum officiis perferendis
				sit doloribus similique inventore aspernatur blanditiis. Quaerat accusamus saepe quisquam,
				animi inventore commodi at, autem nesciunt eum corrupti ducimus veritatis recusandae quidem!
				Odit, impedit aperiam. Expedita aut architecto quasi non temporibus accusamus quae optio
				magni a, nulla perferendis sint, quaerat corporis fugiat earum omnis? Sit recusandae
				similique nobis nam. Consectetur nostrum officiis cumque quasi ex! Autem nostrum enim
				magnam, eum maxime ipsa suscipit dolorem velit accusantium dicta sed aspernatur incidunt
				facere deserunt! Necessitatibus quas nostrum eum dicta maxime amet culpa. Nostrum rem non
				sapiente nam? Omnis temporibus praesentium vitae quam perferendis eligendi tenetur quisquam,
				rerum quibusdam ea cumque labore incidunt, optio reiciendis veniam dignissimos. Officia
				corrupti unde commodi consectetur blanditiis ullam suscipit magni praesentium qui? Quidem
				temporibus aspernatur quasi aliquam vitae, deserunt quibusdam accusantium molestias tempora
				sit fuga, laboriosam quia vel illum rem nemo doloremque officia corrupti modi quo suscipit
				autem repellendus facere! Doloremque, ipsa! Similique dolore esse minima veritatis. Ad
				quidem magni cupiditate illo officiis blanditiis nam explicabo dolorem, qui quaerat ducimus
				velit inventore voluptates voluptatem laborum sed sunt tenetur? Tempora dolorum laboriosam
				obcaecati. Eum explicabo hic vero quam nisi impedit natus similique sequi magnam fugit
				architecto corporis sit, necessitatibus error doloremque nobis. Qui unde cumque veniam
				voluptate esse quaerat animi, impedit libero corrupti. Optio perferendis minima tempora
				deleniti laborum, adipisci eaque libero debitis voluptate distinctio molestiae nesciunt,
				pariatur reiciendis, ea omnis exercitationem tempore aperiam aut accusantium magnam.
				Consectetur dolore maxime ea nisi laudantium. Id voluptate cum repellendus! Asperiores
				veniam in dignissimos sequi deleniti possimus omnis cum recusandae esse laborum unde
				tempore, earum provident delectus placeat vel sunt hic autem ratione quo alias eaque.
				Commodi, cum! Numquam voluptates tenetur magnam placeat, minima voluptatem quia sequi optio
				saepe molestiae ratione odit aspernatur suscipit eaque dolor pariatur ipsum, commodi iusto!
				Reprehenderit eum repudiandae beatae cumque cum. Incidunt quisquam aliquid illo accusamus
				natus. Repellendus nulla perspiciatis dolore quaerat quasi odit in et, corrupti consequatur
				provident recusandae aliquid dolor quidem ex voluptatem maiores molestias fugit tempora, a
				cum? Iste fuga quos sit reprehenderit laboriosam. Esse repudiandae nulla suscipit, corporis
				obcaecati repellat magnam eligendi fugit dolores optio cumque? Hic, temporibus blanditiis
				nihil inventore porro magnam distinctio! Deleniti, recusandae optio? Aliquid nihil est
				incidunt fugit magni esse tenetur voluptatum earum sunt, porro corrupti enim, quia dolorum
				exercitationem vitae voluptas saepe quos, libero doloribus eum repellat veniam repellendus.
				Eum, voluptatibus nihil. Nisi ex architecto ullam aperiam atque facere qui, dolorem
				accusamus maxime libero officiis? Commodi, at! Pariatur magnam facere, ea, rem est optio
				debitis quis voluptate aliquam quae impedit, earum sequi. Facere, quos mollitia aperiam quod
				corrupti praesentium ad perspiciatis aut debitis, quas, natus obcaecati doloribus! Expedita
				dolorem, dolor, nesciunt corrupti temporibus nostrum, natus repudiandae iure minus est
				officiis voluptas asperiores? Fugit sapiente perferendis tempora numquam ducimus quos
				necessitatibus, molestiae sint dicta debitis, dolores qui. Vel corrupti asperiores quibusdam
				assumenda tenetur, distinctio doloribus saepe possimus quae facere sed adipisci dolorum
				impedit? Hic autem omnis ex ea molestias maxime similique sit? Voluptatibus illum rerum,
				sapiente molestias aperiam, earum iste quis, aliquid omnis facere libero ab harum
				praesentium hic maxime consectetur laudantium? Illum. Reiciendis beatae dolor consequuntur
				quo quaerat unde, minima mollitia debitis aliquam, veniam dolore eos harum temporibus, ipsam
				excepturi sint obcaecati dolorum et? Repellendus, dignissimos molestiae! Vero eligendi
				voluptates blanditiis atque. Quidem suscipit necessitatibus est ad vel voluptatibus quisquam
				corrupti incidunt error sapiente in itaque aperiam, eos perferendis quo optio fugit,
				voluptates aut cupiditate eum excepturi! Consequuntur rerum maiores incidunt at! Itaque
				tempore suscipit corporis natus, hic reprehenderit aliquam consequuntur quisquam perferendis
				odio officiis commodi deleniti libero exercitationem debitis molestiae quam possimus?
				Molestias, tenetur ab. Dicta recusandae modi facere voluptatibus blanditiis? Aliquid
				voluptatum, corrupti accusantium fugit dolore sint deleniti quia voluptate explicabo
				repellendus porro tempore, ab nisi voluptatibus ipsam, dolores laudantium modi voluptates
				blanditiis velit magni repellat? Maiores dolorum ipsa necessitatibus? Non maiores laborum
				quae tempore at doloremque, consequatur delectus cum alias totam, ad atque velit natus quasi
				sed error. Unde architecto sed asperiores nostrum magnam reiciendis error placeat libero
				illo! Debitis labore maiores quae culpa atque aspernatur praesentium quas corporis provident
				deleniti iure doloribus, nobis exercitationem quasi doloremque, voluptatem assumenda
				ratione, nihil necessitatibus consectetur fugiat incidunt accusamus. Aliquam, nesciunt
				accusantium? Rem aliquid, esse laborum dolorum velit sunt soluta vero. Deleniti est
				provident sapiente et modi soluta molestias similique ea blanditiis aperiam ipsa quis sit,
				sint eos ab, aspernatur quasi exercitationem. Voluptas, dignissimos! Voluptates corporis
				voluptatem placeat laboriosam! Facilis quasi tempora voluptatum consectetur cumque delectus
				dolor sint? Architecto perferendis, eius possimus consectetur iure asperiores amet nesciunt
				excepturi fugiat. Quam, ut labore. Earum ipsum culpa dicta vero, nulla incidunt fuga
				quaerat. Explicabo fuga sint quos perferendis laudantium itaque esse illo tempora corrupti
				eum, similique quidem facere vero perspiciatis voluptatibus architecto maiores expedita? In
				dicta sapiente itaque porro commodi similique, nobis consequatur perferendis tempore
				provident amet repudiandae, id numquam quisquam quibusdam illo ducimus! Quidem tenetur eius
				ducimus consectetur. Excepturi rem laudantium necessitatibus cupiditate. Aliquam, magni
				maxime sit excepturi est nemo in alias perspiciatis nostrum recusandae distinctio.
				Perspiciatis, iste impedit quaerat cumque dolor necessitatibus quae quos rerum ipsam
				asperiores! Quidem inventore quis dignissimos ut? Error vero placeat odio asperiores
				perferendis maxime sit? Dolores unde distinctio accusamus cum reiciendis soluta, adipisci,
				alias dolore pariatur accusantium ipsum itaque. Tempora doloribus voluptatum unde pariatur
				perferendis eos architecto. Delectus neque cupiditate soluta dolore, ab atque quos, tempora
				dignissimos nemo cum beatae illum labore. Quae, veritatis culpa. Aliquid hic animi ullam id
				vel fugiat quaerat alias beatae, officiis assumenda? Blanditiis, culpa? Esse quibusdam
				repellendus nulla ipsum ad tempore quos, magni non amet dolorem, illo quidem aperiam
				officiis accusantium, mollitia ea omnis. Quae corporis ex adipisci nostrum architecto
				reprehenderit odit! Repellendus ipsam sit eius? Eligendi rem maiores numquam dolorum laborum
				odio veritatis doloremque sint odit iusto omnis quod, facere accusamus saepe sapiente at
				error expedita ex veniam. Similique, doloremque laborum. Iste enim dolore cupiditate cum
				expedita deleniti, numquam quae! Iusto sint iste voluptate commodi facilis corporis cumque
				debitis esse sunt iure assumenda eveniet, ducimus accusantium beatae saepe quia totam. Ea?
				Nesciunt repudiandae officiis numquam distinctio quidem quaerat. Laboriosam veniam odit, rem
				delectus iusto alias reiciendis impedit accusamus similique libero at, blanditiis quibusdam
				asperiores perferendis neque, facere exercitationem inventore culpa eligendi! Mollitia, nisi
				officia culpa libero id maiores, fugiat iusto consequatur porro non reiciendis iste
				laudantium animi blanditiis voluptas. Beatae recusandae maxime eius quidem. Libero vitae,
				hic consectetur pariatur facilis repellat? Perferendis nulla deleniti maxime quasi in,
				obcaecati facere! Dolorum voluptate illo dignissimos nisi quas sapiente, ducimus cupiditate
				ipsam adipisci excepturi! Dolor, distinctio explicabo eos dolores praesentium suscipit
				perferendis corrupti officiis. Distinctio dignissimos odit id rerum nulla ea modi. Veritatis
				nulla praesentium alias quia blanditiis libero repudiandae nam, itaque, quidem dignissimos
				porro, placeat doloremque repellat distinctio quos asperiores cupiditate quis enim!
				Voluptatum doloribus magnam, obcaecati velit, consequatur, rem eius architecto iusto
				voluptatibus ad alias impedit perferendis sint laboriosam nulla odit quidem quae nihil!
				Optio expedita ipsa dolorum ipsum hic odio ullam. Earum recusandae enim dolore ducimus.
				Adipisci soluta natus iure quaerat inventore! Praesentium, suscipit porro. Id cupiditate
				odit, tenetur consequatur quae aperiam, voluptas dicta sapiente perferendis placeat eaque.
				Nisi, modi consequuntur. Vel, asperiores sunt eos ducimus, pariatur rem ab amet sequi minus
				itaque nostrum inventore eveniet? Corrupti culpa ipsam magnam, vitae tempore deserunt
				dignissimos itaque! Quidem consequatur sint iure. Distinctio, molestiae! Dolore ducimus
				dolorem dicta necessitatibus asperiores tenetur quo aliquam odio reprehenderit mollitia
				facilis, inventore maxime enim, dolor iste cumque, numquam vel similique repellendus sunt
				itaque consequuntur eos atque voluptates? Laboriosam. Enim maiores quasi ullam fuga
				perspiciatis quia asperiores nobis necessitatibus officiis laborum? Temporibus cupiditate
				unde quidem maxime impedit eveniet non. Nisi ea inventore accusantium numquam quo quia
				fugit, eos quam! Dignissimos recusandae explicabo cum? Inventore neque beatae ducimus
				suscipit amet adipisci repellat ut est error, corporis quibusdam saepe veniam nemo
				recusandae illum perferendis ea quo nulla sequi velit distinctio! Dolor. Suscipit optio
				ipsum, harum eveniet numquam sapiente error saepe quisquam! Quidem quod perferendis optio
				cumque sit ducimus unde laudantium facilis laboriosam at alias assumenda dolore voluptate,
				blanditiis, sed maiores temporibus! Recusandae repudiandae beatae a sit exercitationem, iste
				reprehenderit voluptatum? Ullam, iste, itaque at cum error magni excepturi, illum sit iure
				dolores velit necessitatibus ipsam doloribus sunt labore blanditiis tempora voluptas.
			</p>
			<form>
				<input type='text' ref={refInput} />
				<input type='text' ref={refInput2} />
				<button onClick={handleClick2} type='button'>
					sub
				</button>
			</form>
			<br />
			<br />
			<br />
		</div>
	)
}

export default TestRef
