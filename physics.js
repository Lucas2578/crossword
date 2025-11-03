function getAcceleration(properties){
    if (properties['f'] >  0 && properties['m']>0){
        return properties['f']/properties['m']
    }else if (properties['Δt'] >  0 && properties['Δv']>0){
        return properties['Δv']/properties['Δt']
    }else if (properties['t'] >  0 && properties['d']>0){
        return properties['d']*2 / properties['t']*properties['t']
    }else {
        return "impossible"
    }
}