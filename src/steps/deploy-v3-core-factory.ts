import UniswapV3Factory from '@offsetcarbon/v3-core/artifacts/contracts/UniswapV3Factory.sol/UniswapV3Factory.json'
import createDeployContractStep from './meta/createDeployContractStep'

export const DEPLOY_V3_CORE_FACTORY = createDeployContractStep({
  key: 'v3CoreFactoryAddress',
  artifact: UniswapV3Factory,
})
