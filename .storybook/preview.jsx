import  theme  from '../shared/ui/src/theme'
import Providers from '../shared/ui/src/providers';

export const parameters = {
  chakra: {
    theme
  },
}
export const decorators = [
  (Story) => (
    <Providers>
        <Story />
    </Providers>
  ),
]
