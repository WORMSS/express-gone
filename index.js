module.exports = function gone({status=410, redirect, type, render, renderLocals, send} = {}) {
    if ( redirect ) {
        return (req, res, next) => {
            res.redirect(status, redirect);
        };
    }
    
    if ( render ) {
        if ( type ) {
            return (req, res, next) => {
                res.status(status).type(type).render(render, renderLocals);
            }
        }
        return (req, res, next) => {
            res.status(status).render(render, renderLocals);
        };
    }
    
    if ( send ) {
        if ( type ) {
            return (req, res, next) => {
                res.status(status).type(type).send(send);
            }
        }
        return (req, res, next) => {
            res.status(status).send(send);
        }
    }
    
    return (req, res, next) => {
        res.sendStatus(status);
    };
};